import { SocialProvider } from 'models/user';

export default function handleSocialSign(provider: SocialProvider) {
  return () => {
    window.open(
      `${window.location.origin}/social_sign/${provider}`,
      '_blank',
      'resizable,scrollbars,width=800,height=600,left=300,top=40'
    );
  }
}
