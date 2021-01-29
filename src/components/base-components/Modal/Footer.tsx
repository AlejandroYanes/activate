/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import Button, { ButtonProps } from 'components/base-components/Button';
import { Footer as StyledFooter } from './styled';

interface Props {
  actions?: ButtonProps[];
  footer?: ReactNode;
}

const Footer: FunctionComponent<Props> = (props): any => {
  const { footer, actions } = props;

  const actionElements = useMemo(() => {
    if (actions && Array.isArray(actions)) {
      return actions.map((action, index) => <Button key={index} {...action} />);
    }
    return null;
  }, [actions]);

  if (footer) {
    return footer;
  }

  return (
    <StyledFooter>
      {actionElements}
    </StyledFooter>
  );
};

export default Footer;
