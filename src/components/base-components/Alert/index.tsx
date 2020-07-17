import React, { FunctionComponent } from 'react';
import Button from '../Button';
import RenderIf from '../RenderIf';
import { Actions, AlertIcon, resolveTitle } from './utils';
import {
  Actions as StyledActions,
  Alert as StyledAlert,
  Content,
  Divider,
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
  actions?: AlertAction[];
  mb?: boolean;
}

const Alert: FunctionComponent<AlertProps> = (props) => {
  const { message, type, actions, mb } = props;

  if (typeof message === 'function') {
    return message(() => undefined);
  }

  return (
    <StyledAlert mb={mb}>
      <Content>
        <IconSection>
          <AlertIcon type={type} />
        </IconSection>
        <MessageSection>
          <Tittle>{resolveTitle(type)}</Tittle>
          <Message>{message}</Message>
        </MessageSection>
      </Content>
      <Divider />
      <StyledActions>
        <RenderIf condition={!!actions && actions.length > 0}>
          <Actions actions={actions} />
        </RenderIf>
        <Button label="Close" onClick={() => undefined} sm />
      </StyledActions>
    </StyledAlert>
  );
};

export default Alert;
