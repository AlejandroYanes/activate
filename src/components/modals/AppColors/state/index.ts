import { useCallback } from 'react';
import { useAuthActions, useAuthData } from 'components/providers/Auth';
import updateProfileTheme from './actions/update-profile-theme';

export default function useAppColorsState() {
  const { userInfo } = useAuthData();
  const { updateUserInfo } = useAuthActions();
  const { theme: activeTheme, useDarkStyle } = userInfo;

  const handleThemeChange = useCallback((nextTheme) => {
    updateUserInfo({ ...userInfo, theme: nextTheme });
    // noinspection JSIgnoredPromiseFromCall
    updateProfileTheme(nextTheme, useDarkStyle);
  }, [activeTheme, useDarkStyle]);

  const handleLightStyleChange = useCallback(() => {
    updateUserInfo({
      ...userInfo,
      useDarkStyle: !useDarkStyle,
    });
    // noinspection JSIgnoredPromiseFromCall
    updateProfileTheme(activeTheme, !useDarkStyle);
  }, [activeTheme, useDarkStyle]);

  return {
    state: {
      activeTheme,
      useDarkStyle,
    },
    actions: {
      handleThemeChange,
      handleLightStyleChange,
    },
  };
}
