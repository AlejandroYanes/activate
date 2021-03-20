import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalMap } from './types';

interface Props {
  name: string;
}

const emptyComponent = () => null;

const ModalRenderer: FunctionComponent<Props> = (props) => {
  const { name } = props;
  const Component = ModalMap[name] || emptyComponent;

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.style.display = 'none';

    return () => {
      rootElement.style.display = 'block';
    }
  }, []);

  return ReactDOM.createPortal((
    <Component key={name} />
  ), document.body);
}

export default ModalRenderer;
