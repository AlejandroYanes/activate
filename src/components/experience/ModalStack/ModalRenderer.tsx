import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalMap } from 'components/modals';
import { Layout, useAppLayout } from '../../providers/Layout';

interface Props {
  name: string;
}

const emptyComponent = () => null;

const ModalRenderer: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { name } = props;
  const Component = ModalMap[name] || emptyComponent;

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
    <Component key={name} />
  ), document.body);
}

export default ModalRenderer;
