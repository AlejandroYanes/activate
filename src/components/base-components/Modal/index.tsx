import React, { FunctionComponent, ReactNode } from 'react';
import { ButtonProps } from 'components/base-components/Button';
import Backdrop from 'components/base-components/Backdrop';
import Header from './Header';
import Footer from './Footer';
import { Content, StyledModal } from './styled';

interface Props {
  visible: boolean;
  title: string | ReactNode;
  onClose: () => void;
  actions?: ButtonProps[];
  footer?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'mobile';
}

const Modal: FunctionComponent<Props> = (props) => {
  const { visible, title, onClose, actions, footer, size, children } = props;

  if (visible) {
    return (
      <Backdrop onClick={onClose}>
        <StyledModal size={size} data-el="modal-container">
          <Header size={size} title={title} onClose={onClose} />
          <Content>
            {children}
          </Content>
          <Footer footer={footer} actions={actions} />
        </StyledModal>
      </Backdrop>
    );
  }

  return null;
};

Modal.defaultProps = {
  size: 'small',
};

export default Modal;
