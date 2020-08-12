import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import RenderIf from 'components/base-components/RenderIf';
import { Actions, AlertIcon, resolveTitle } from './utils';
import {
  Actions as StyledActions,
  Alert as StyledAlert,
  CloseIcon,
  Content,
  IconSection,
  Message,
  MessageSection,
  Tittle,
} from './styled';

export enum AlertType {
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
}

export interface AlertAction {
  code: string;
  label: string;
  onClick: () => void;
}

export interface AlertProps {
  message: string | ((close) => JSX.Element);
  type: AlertType;
  title?: string;
  actions?: AlertAction[];
  mb?: boolean;
}

const Alert: FunctionComponent<AlertProps> = (props) => {
  const { title, message, type, actions, mb } = props;

  if (typeof message === 'function') {
    return message(() => undefined);
  }

  return (
    <StyledAlert mb={mb}>
      <Content data-el="alert-content">
        <IconSection data-el="alert-icon-section">
          <AlertIcon type={type} />
        </IconSection>
        <MessageSection data-el="alert-message-section">
          <Tittle>{title || resolveTitle(type)}</Tittle>
          <Message>{message}</Message>
        </MessageSection>
      </Content>
      <StyledActions data-el="alert-actions">
        <RenderIf condition={!!actions && actions.length > 0}>
          <Actions actions={actions} />
        </RenderIf>
      </StyledActions>
      <CloseIcon>
        <IconButton
          onClick={() => undefined}
          icon={Icons.CLOSE}
          color={Colors.GRAY}
          buttonColor="gray"
          sm
        />
      </CloseIcon>
    </StyledAlert>
  );
};

export default Alert;
