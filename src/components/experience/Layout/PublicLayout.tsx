import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { useAppLayout } from 'components/providers/Layout';
import { useAppTheme } from 'components/providers/Theme';
import { Title } from 'components/base-components/Typography';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { StyledApp, Header, Content } from './styled/public-layout';
import NotificationCenter from '../NotificationCenter';
import RenderIf from '../../base-components/RenderIf';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;
  const { isLoggedIn } = useAuthData();
  const layout = useAppLayout();
  const {
    colors,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_HIGHLIGHT} size="small" />
  ), [colors]);

  return (
    <StyledApp layout={layout} data-el="app">
      <Header layout={layout} data-el="app-header">
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
      <Content layout={layout} data-el="app-body">
        {children}
      </Content>
      <NotificationCenter />
    </StyledApp>
  );
};

export default PublicLayout;
