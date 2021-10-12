import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { modalsMap } from 'components/modals';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import EmptyModal from './EmptyModal';

interface Props {
  hash: string;
}

const ModalRenderer: FunctionComponent<Props> = (props) => {
  const { hash } = props;
  const layout = useAppLayout();
  const Component = modalsMap[hash] || EmptyModal;

  useEffect(() => {
    if (layout === Layout.MOBILE) {
      const rootElement = document.getElementById('root');
      rootElement.style.display = 'none';

      return () => {
        rootElement.style.display = 'block';
      }
    }
  }, []);

  return ReactDOM.createPortal((
    <Component key={hash} />
  ), document.body);
}

export default ModalRenderer;
