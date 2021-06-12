import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import SvgIcon from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';

const reloadPage = () => window.location.reload();

const ErrorMessage = () => {
  return (
    <FlexBox direction="column" align="center">
      <SvgIcon
        icon="EXCLAMATION_TRIANGLE"
        color="WARNING"
        size="x-large"
      />
      <Text padding="24px 0 12px" size="large">Oops, sorry about that.</Text>
      <Text size="medium" align="center">
        There is been an issue loading the interests.
        Please reload the page or check your internet connection.
      </Text>
      <Button
        mT
        label="Reload"
        variant="fill"
        color="warning"
        onClick={reloadPage}
      />
    </FlexBox>
  );
};

export default ErrorMessage;
