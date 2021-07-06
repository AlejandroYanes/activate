/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Button, ButtonProps } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';

interface Props {
  actions?: ButtonProps[];
  footer?: ReactNode;
}

const footerSpacingMap = {
  [Layout.MOBILE]: '0 6px 24px',
  [Layout.TABLET]: '16px 16px 6px',
  [Layout.DESKTOP]: '16px 16px 6px',
};

const ActionsRenderer = ({ actions, footerSpacing }) => {
  const actionElements = useMemo(() => {
    if (actions && Array.isArray(actions)) {
      return actions.map((action, index) => <Button key={index} {...action} />);
    }

    return null;
  }, [actions]);

  return (
    <FlexBox justify="flex-end" padding={footerSpacing}>
      {actionElements}
    </FlexBox>
  );
};

const Footer: FunctionComponent<Props> = (props): any => {
  const { footer, actions } = props;
  const layout = useAppLayout();
  const footerSpacing = footerSpacingMap[layout];

  if (footer) {
    return (
      <FlexBox justify="flex-end" padding={footerSpacing}>
        {footer}
      </FlexBox>
    );
  }

  if (actions) {
    return (
      <ActionsRenderer actions={actions} footerSpacing={footerSpacing} />
    );
  }

  return null;
};

export default Footer;
