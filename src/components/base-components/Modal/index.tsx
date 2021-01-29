import React, { FunctionComponent, ReactNode } from 'react';
import { ButtonProps } from 'components/base-components/Button';
import Backdrop from 'components/base-components/Backdrop';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Title from './Title';
import Footer from './Footer';
import { StyledModal, Header, Content } from './styled';

interface Props {
  visible: boolean;
  header: string | ReactNode;
  onClose: () => void;
  actions?: ButtonProps[];
  footer?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const clickTrap = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const Modal: FunctionComponent<Props> = (props) => {
  const { visible, header, onClose, actions, footer, size, children } = props;

  if (visible) {
    return (
      <Backdrop onClick={onClose}>
        <StyledModal size={size} onClick={clickTrap} data-el="modal-container">
          <Header>
            <Title content={header} />
            <IconButton onClick={onClose} icon={Icons.CLOSE} variant="flat" />
          </Header>
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
