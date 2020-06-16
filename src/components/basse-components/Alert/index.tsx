import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Actions, AlertIcon, resolveTitle } from './utils';
import './styles.scss';
import Button from '../Button';
import RenderIf from '../RenderIf';

export enum AlertType {
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
}

export interface AlertAction {
  label: string;
  onClick: () => void;
}

interface Props {
  message: string | ((close) => JSX.Element);
  type: AlertType;
  actions?: AlertAction[];
  mb?: boolean;
}

const Alert: FunctionComponent<Props> = (props) => {
  const { message, type, actions, mb } = props;

  if ( typeof message === 'function') {
    return message(() => undefined);
  }

  const alertClassName = classnames('alert', { mb });

  return (
    <div className={alertClassName}>
      <div className="alert_content">
        <div className="alert_icon-section">
          <AlertIcon type={type} />
        </div>
        <div className="alert_message-section">
          <h1 className="alert_title">{resolveTitle(type)}</h1>
          <p className="alert_message">{message}</p>
        </div>
      </div>
      <div className="alert_divider" />
      <div className="alert_actions">
        <RenderIf condition={!!actions && actions.length > 0}>
          <Actions actions={actions} />
        </RenderIf>
        <Button label="Close" onClick={() => undefined} />
      </div>
    </div>
  );
};

export default Alert;
