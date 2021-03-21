import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import ModalRenderer from './ModalRenderer';

const ModalStack: FunctionComponent = () => {
  const { hash } = useLocation();

  if (hash) {
    return <ModalRenderer name={hash} />
  }

  return null;

};

export default ModalStack;
