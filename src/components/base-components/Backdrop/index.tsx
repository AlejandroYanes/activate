import React, { FunctionComponent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { scrollThumbWidth } from 'styles/variables';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { StyledBackdrop } from './styled';

interface Props {
  onClick: (event) => void;
}

const Backdrop: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { onClick, children } = props;
  const backdropRef = useRef(undefined);

  const handleClick = (event) => {
    if (event.target === backdropRef.current) {
      onClick(event);
    }
  };

  useEffect(() => {
    const needToFixOverflow = document.body.style.overflowY === 'auto';

    if (needToFixOverflow) {
      document.body.style.overflowY = 'hidden';
    }

    if (layout === Layout.DESKTOP) {
      document.body.style.padding = `0 ${scrollThumbWidth} 0 0`;
    }

    return () => {
      if (needToFixOverflow) {
        document.body.style.overflowY = 'auto';
      }

      if (layout === Layout.DESKTOP) {
        document.body.style.padding = '0px';
      }
    }
  }, []);

  return ReactDOM.createPortal((
    <StyledBackdrop ref={backdropRef} onClick={handleClick} data-el="backdrop">
      <div data-el="backdrop-container">
        {children}
      </div>
    </StyledBackdrop>
  ), document.body);
};

export default Backdrop;
