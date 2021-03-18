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
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return ReactDOM.createPortal((
    <Component key={name} />
  ), document.body);
}

export default ModalRenderer;
