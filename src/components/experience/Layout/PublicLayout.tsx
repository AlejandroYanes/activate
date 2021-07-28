import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { useAppTheme } from 'components/providers/Theme';
import { Title } from 'components/base-components/Typography';
import Toggle from 'components/base-components/Toggle';
import SvgIcon from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import NotificationCenter from '../NotificationCenter';
import { Content, Header, StyledApp } from './styled/public-layout';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;
  const { isLoggedIn } = useAuthData();
  const {
    colors,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();

  const sunIcon = useMemo(() => (
    <SvgIcon icon="SUN" color="GRAY_DARK" size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon
      icon="MOON"
      color="ACCENT_HIGHLIGHT"
      size="small"
    />
  ), [colors]);

  return (
    <StyledApp data-el="app">
      <Header data-el="app-header">
        <Link to="/">
          <Title level={2}>Activate</Title>
        </Link>
        <RenderIf condition={isLoggedIn}>
          <Toggle
            margin="0 0 0 auto"
            nobNode={useDarkStyle ? moonIcon : sunIcon}
            value={useDarkStyle}
            onChange={toggleLightStyle}
          />
        </RenderIf>
      </Header>
      <Content data-el="app-body">
        {children}
      </Content>
      <NotificationCenter />
    </StyledApp>
  );
};

export default PublicLayout;
