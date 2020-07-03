import React from 'react';
import Colors from '../../../styles/colors';
import SvgIcon from '../SvgIcon';
import { Icons } from '../SvgIcon/Icons';
import Button from '../Button';
import { AlertAction, AlertType } from './index';

export function resolveTitle(type) {
  switch (type as AlertType) {
    case AlertType.SUCCESS:
      return 'Good, we made it:';
    case AlertType.INFO:
      return 'You may want to know:';
    case AlertType.WARNING:
      return 'You need to know:';
    case AlertType.ERROR:
      return 'Oops, something went wrong:';
  }
}

export function resolveIcon(type) {
  switch (type as AlertType) {
    case AlertType.SUCCESS:
      return <SvgIcon icon={Icons.SUCCESS} fillColor={Colors.WHITE} />;
    case AlertType.INFO:
      return <SvgIcon icon={Icons.INFO} fillColor={Colors.WHITE} />;
    case AlertType.WARNING:
      return <SvgIcon icon={Icons.WARNING} fillColor={Colors.WHITE} />;
    case AlertType.ERROR:
      return <SvgIcon icon={Icons.ERROR} fillColor={Colors.WHITE} />;
  }
}

export function resolveColor(type) {
  switch (type as AlertType) {
    case AlertType.SUCCESS:
      return Colors.SUCCESS;
    case AlertType.INFO:
      return Colors.INFO;
    case AlertType.WARNING:
      return Colors.WARNING;
    case AlertType.ERROR:
      return Colors.ERROR;
  }
}

export function AlertIcon({ type }) {
  return (
    <div className="alert_icon" style={{ backgroundColor: resolveColor(type) }}>
      {resolveIcon(type)}
    </div>
  );
}

export function Actions(props: { actions: AlertAction[] }): any {
  const { actions } = props;

  return actions.map((action) => (
    <Button label={action.label} onClick={action.onClick} mR sm />
  ));
}
