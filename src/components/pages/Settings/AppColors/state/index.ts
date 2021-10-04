import { useCallback } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import updateProfileTheme from './actions/update-profile-theme';

export default function useSettingsState() {
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

  return {
    state: {
      colors,
      activeTheme,
      useDarkStyle,
    },
    actions: {
      handleThemeChange,
      handleLightStyleChange,
    },
  };
}
