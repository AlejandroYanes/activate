import { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import SvgIcon from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';

interface Props {
  message: string;
}

const reloadPage = () => window.location.reload();

const NoConnectionScreen: FunctionComponent<Props> = (props) => {
  const { message } = props;
  return (
    <FlexBox direction="column" align="center">
      <SvgIcon
        icon="EXCLAMATION_TRIANGLE"
        color="WARNING"
        size="x-large"
      />
      <Text padding="24px 0 12px" size="large">Oops, sorry about that.</Text>
      <Text as="p" size="medium" align="center">
        {message}
        <br />
        Please check your internet connection or reload the page.
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

export default NoConnectionScreen;
