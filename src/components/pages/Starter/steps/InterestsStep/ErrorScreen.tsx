import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';

const ErrorScreen = () => {
  return (
    <>
      <Text padding="24px 0 12px" size="large">Oops, sorry about that.</Text>
      <Text size="medium">
        There is been an issue loading the interests.
        Please reload the page or check your internet connection.
      </Text>
      <Button
        label="Reload"
        margin="12px auto 0 0"
        variant="fill"
        onClick={() => window.location.reload()}
      />
    </>
  );
};

export default ErrorScreen;
