import { UserInfo } from 'models/user';
import { NotificationType, showNotification } from 'notifications';

export default function handleLogIn(login: (user: UserInfo) => void) {
  return (event: MessageEvent) => {
    const { data } = event;
    if (data?.source === 'activate_social_sign.success') {
      login(data?.payload)
    } else if (data?.source === 'activate_social_sign.error') {
      showNotification({
        type: NotificationType.ERROR,
        message: `We couldn't complete the Sign In with ${data?.payload?.provider}`,
      });
    }
  }
}
