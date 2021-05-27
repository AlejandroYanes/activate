import authApi from 'api/auth';
import { NotificationType, showNotification } from 'notifications';
import { AppTheme } from 'components/providers/Theme';

export default function updateProfileTheme(theme: AppTheme, useDarkStyle: boolean) {
  const onError = () => {
    showNotification({
      type: NotificationType.ERROR,
      message: 'The new theme could not be saved to your profile',
    });
  };

  return authApi.updateTheme(theme, useDarkStyle)
    .catch(onError);
}
