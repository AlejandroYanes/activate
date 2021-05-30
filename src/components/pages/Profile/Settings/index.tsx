import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import InterestsGrid from 'components/experience/InterestsGrid';
import ThemesGrid from 'components/experience/ThemesGrid';
import { StyledSettings } from './styled';
import updateProfileTheme from './update-profile-theme';
import { interests } from './interests';
import { themes } from './themes';

const Settings: FunctionComponent = () => {
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
    <StyledSettings>
      <Text size="large" color="secondary" mB>Your Interests</Text>
      <InterestsGrid interests={interests} readonly />
      <LinkButton
        to="/app/interests"
        label="Manage"
        margin="24px 0 0 auto"
        color="brand"
        variant="outline"
      />
      <Text size="large" color="secondary" mT mB>Colors</Text>
      <ThemesGrid
        themes={themes}
        activeTheme={activeTheme}
        onChange={handleThemeChange}
      />
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
