import { FunctionComponent } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import { Field } from 'components/base-components/Form';
import { Button, LinkButton } from 'components/base-components/Button';
import Checkbox from 'components/base-components/Checkbox';
import { Text } from 'components/base-components/Typography';
import { SignAction } from '../state';
import { ActionBoxProps } from './';

const termsLabel = (
  <Text>
    <span>I accept the </span>
    <LinkButton
      to="/terms"
      variant="text"
      color="accent"
    >
      Terms of Service
    </LinkButton>
  </Text>
);

const MobileActionBox: FunctionComponent<ActionBoxProps> = (props) => {
  const { signAction, callingApi, onClick } = props;

  return (
    <FlexBox
      direction="column"
      align="stretch"
      justify="space-between"
    >
      <RenderIf condition={signAction === SignAction.SIGN_IN}>
        <Field
          name="rememberMe"
          label="Remember me"
          component={Checkbox}
          padding="0 0 0 20px"
          mB
        />
      </RenderIf>
      <RenderIf condition={signAction === SignAction.SIGN_UP}>
        <Field
          name="termsAccepted"
          label={termsLabel}
          component={Checkbox}
          padding="0 0 0 20px"
          mB
        />
      </RenderIf>
      <Button
        onClick={onClick}
        label={signAction}
        loading={callingApi}
        variant="fill"
        mT
      />
    </FlexBox>
  );
}

export default MobileActionBox;
