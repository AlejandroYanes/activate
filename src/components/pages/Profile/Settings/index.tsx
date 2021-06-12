import React, { FunctionComponent, useMemo } from 'react';
import Toggle from 'components/base-components/Toggle';
import SvgIcon from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import ThemesGrid from 'components/experience/ThemesGrid';
import { StyledSettings } from './styled';
import MyInterests from './MyInterests';
import useSettingsState from './state';
import { themes } from './themes';

const Settings: FunctionComponent = () => {
  const {
    state: {
      colors,
      activeTheme,
      useDarkStyle,
    },
    actions: {
      handleThemeChange,
      handleLightStyleChange,
    },
  } = useSettingsState();

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
    <StyledSettings>
      <MyInterests />
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
