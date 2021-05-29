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
    >Terms of Service
    </LinkButton>
  </Text>
);

const PrimaryActionBox: FunctionComponent<ActionBoxProps> = (props) => {
  const { signAction, onClick } = props;

  return (
    <FlexBox align="center" justify="space-between" padding="20px 0 0 20px">
      <RenderIf condition={signAction === SignAction.SIGN_IN}>
        <Field name="rememberMe" label="Remember me" component={Checkbox} mR />
      </RenderIf>
      <RenderIf condition={signAction === SignAction.SIGN_UP}>
        <Field
          name="termsAccepted"
          label={termsLabel}
          component={Checkbox}
        />
      </RenderIf>
      <Button
        onClick={onClick}
        label={signAction}
        variant="fill"
        margin="0 0 0 auto"
        padding="0 20px"
      />
    </FlexBox>
  );
}

export default PrimaryActionBox;
