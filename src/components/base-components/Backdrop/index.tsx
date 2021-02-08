import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyledBackdrop } from './styled';

interface Props {
  onClick: (e) => void;
}

const Backdrop: FunctionComponent<Props> = (props) => {
  const { onClick, children } = props;

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return ReactDOM.createPortal((
    <StyledBackdrop onClick={onClick} data-el="backdrop">
      {children}
    </StyledBackdrop>
  ), document.body);
};

export default Backdrop;
