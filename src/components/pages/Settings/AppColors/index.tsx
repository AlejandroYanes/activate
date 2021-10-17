import React, { FunctionComponent } from 'react';
import { SvgIcon, Title, Toggle } from 'activate-components';
import ThemesGrid from 'components/experience/ThemesGrid';
import useAppColorsState from './state';
import { themes } from './themes';

const sunIcon = (
  <SvgIcon icon="SUN" color="GRAY_DARK" size="small" />
);

const moonIcon = (
  <SvgIcon
    icon="MOON"
    color="ACCENT_HIGHLIGHT"
    size="small"
  />
);

const AppColorsSection: FunctionComponent = () => {
  const {
    state: {
      activeTheme,
      useDarkStyle,
    },
    actions: {
      handleThemeChange,
      handleLightStyleChange,
    },
  } = useAppColorsState();

  return (
    <>
      <Title level={2} mB>Colors</Title>
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
    </>
  );
};

export default AppColorsSection;
