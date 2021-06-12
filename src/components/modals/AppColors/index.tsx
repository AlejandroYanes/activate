import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppTheme } from 'components/providers/Theme';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import Toggle from 'components/base-components/Toggle';
import SvgIcon from 'components/base-components/SvgIcon';
import ThemesGrid from 'components/experience/ThemesGrid';
import updateProfileTheme from './update-profile-theme';
import { themes } from './themes';

const AppColorsModal: FunctionComponent = () => {
  const { goBack } = useHistory();
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
    <SvgIcon icon="SUN" color="GRAY_DARK" size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon="MOON" color="ACCENT_HIGHLIGHT" size="small" />
  ), [colors]);

  return (
    <Modal visible title="App Colors" onClose={goBack} size="mobile">
      <FlexBox
        data-el="settings-colors-modal-body"
        direction="column"
        align="stretch"
        padding="24px 6px"
      >
        <ThemesGrid
          mB
          cols={2}
          themes={themes}
          activeTheme={activeTheme}
          onChange={handleThemeChange}
        />
        <FlexBox align="center" justify="space-between" mT>
          <Text>Use Dark Style</Text>
          <Toggle
            nobNode={useDarkStyle ? moonIcon : sunIcon}
            value={useDarkStyle}
            onChange={handleLightStyleChange}
          />
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};

export default AppColorsModal;
