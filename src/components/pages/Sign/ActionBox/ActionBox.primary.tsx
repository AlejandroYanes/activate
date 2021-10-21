import { FunctionComponent } from 'react';
import {
  Button,
  Checkbox,
  Field,
  FlexBox,
  LinkButton,
  RenderIf
} from 'activate-components';
import { SignAction } from '../state';
import { ActionBoxProps } from './';

const termsLabel = (
  <>
    <span>I accept the </span>
    <LinkButton
      to="/terms"
      variant="text"
      color="accent"
    >
      Terms of Service
    </LinkButton>
  </>
);

const PrimaryActionBox: FunctionComponent<ActionBoxProps> = (props) => {
  const { signAction, callingApi, onClick } = props;

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
        loading={callingApi}
        variant="fill"
        margin="0 0 0 auto"
        padding="0 20px"
      />
    </FlexBox>
  );
}

export default PrimaryActionBox;
