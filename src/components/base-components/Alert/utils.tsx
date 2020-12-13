import React from 'react';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import { Icon as StyledIcon } from './styled';
import { AlertAction, AlertType } from '.';

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
    default:
      return '';
  }
}

export function resolveIcon(type) {
  switch (type as AlertType) {
    case AlertType.SUCCESS:
      return <SvgIcon icon={Icons.SUCCESS} color={Colors.WHITE} />;
    case AlertType.INFO:
      return <SvgIcon icon={Icons.INFO} color={Colors.WHITE} />;
    case AlertType.WARNING:
      return <SvgIcon icon={Icons.WARNING} color={Colors.WHITE} />;
    case AlertType.ERROR:
      return <SvgIcon icon={Icons.ERROR} color={Colors.WHITE} />;
    default:
      return null;
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
    default:
      return AlertType.SUCCESS.toString();
  }
}

export function AlertIcon({ type }) {
  return (
    <StyledIcon style={{ backgroundColor: resolveColor(type) }}>
      {resolveIcon(type)}
    </StyledIcon>
  );
}

export function Actions(props: { actions: AlertAction[] }): any {
  const { actions } = props;

  return actions.map((action) => (
    <Button key={action.code} label={action.label} onClick={action.onClick} mR sm />
  ));
}
