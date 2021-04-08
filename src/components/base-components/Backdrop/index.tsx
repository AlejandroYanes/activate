import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { StyledBackdrop } from './styled';

interface Props {
  onClick: (e) => void;
}

const clickTrap = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

const Backdrop: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { onClick, children } = props;

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    if (layout === Layout.DESKTOP) {
      document.body.style.padding = '0 5px 0 0';
    }

    return () => {
      document.body.style.overflowY = 'auto';
      if (layout === Layout.DESKTOP) {
        document.body.style.padding = '0px';
      }
    }
  }, []);

  return ReactDOM.createPortal((
    <StyledBackdrop onClick={onClick} data-el="backdrop">
      <div onClick={clickTrap} data-el="backdrop-container">
        {children}
      </div>
    </StyledBackdrop>
  ), document.body);
};

export default Backdrop;
