/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import Button, { ButtonProps } from 'components/base-components/Button';
import { Footer as StyledFooter } from './styled';

interface Props {
  actions?: ButtonProps[];
  footer?: ReactNode;
}

const ActionsRenderer = ({ actions }) => {
  const actionElements = useMemo(() => {
    if (actions && Array.isArray(actions)) {
      return actions.map((action, index) => <Button key={index} {...action} />);
    }
    
    return null;
  }, [actions]);

  return (
    <StyledFooter>
      {actionElements}
    </StyledFooter>
  );
};

const Footer: FunctionComponent<Props> = (props): any => {
  const { footer, actions } = props;

  if (footer) {
    return footer;
  }

  if (actions) {
    return (
      <ActionsRenderer actions={actions} />
    );
  }

  return null;
};

export default Footer;
