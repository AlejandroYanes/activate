import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import Toggle from 'components/base-components/Toggle';
import SvgIcon from 'components/base-components/SvgIcon';
import ThemesGrid from 'components/experience/ThemesGrid';
import { themes } from './themes';
import useAppColorsState from './state';

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

const AppColorsModal: FunctionComponent = () => {
  const { goBack } = useHistory();
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
    <Modal visible title="App Colors" onClose={goBack} size="mobile">
      <FlexBox
        data-el="settings-colors-modal-body"
        direction="column"
        align="stretch"
        padding="0 16px"
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
