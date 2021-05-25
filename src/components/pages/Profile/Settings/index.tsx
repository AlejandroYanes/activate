import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import { PickList } from 'components/base-components/PickList';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import InterestsGrid from 'components/experience/InterestsGrid';
import { StyledSettings } from './styled';
import Themes from './Themes';
import updateProfileTheme from './update-profile-theme';
import { interests } from './interests';

interface Props {
  asPanel?: boolean;
}

const Settings: FunctionComponent<Props> = (props) => {
  const { asPanel } = props;
  const {
    colors,
    theme: activeTheme,
    setTheme,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();

  const handleThemeChange = useCallback((nextTheme) => {
    setTheme(nextTheme);
    // noinspection JSIgnoredPromiseFromCall
    updateProfileTheme(nextTheme, useDarkStyle);
  }, [activeTheme, useDarkStyle]);

  const handleLightStyleChange = useCallback(() => {
    toggleLightStyle();
    // noinspection JSIgnoredPromiseFromCall
    updateProfileTheme(activeTheme, !useDarkStyle);
  }, [activeTheme, useDarkStyle]);

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_HIGHLIGHT} size="small" />
  ), [colors]);

  return (
    <StyledSettings asPanel={asPanel}>
      <Text size="large" color="secondary" mB>Interests</Text>
      <InterestsGrid interests={interests} readonly />
      <LinkButton
        to="/app/interests"
        label="Manage"
        margin="24px 0 0 auto"
        color="brand"
        variant="outline"
      />
      <Text size="large" color="secondary" mT mB>Colors</Text>
      <PickList
        value={activeTheme}
        onChange={handleThemeChange}
        color="brand"
        layout="grid"
      >
        <Themes />
      </PickList>
      <Toggle
        nobNode={useDarkStyle ? moonIcon : sunIcon}
        label="Use Dark Style"
        value={useDarkStyle}
        onChange={handleLightStyleChange}
        mT
      />
    </StyledSettings>
  );
};

export default Settings;
