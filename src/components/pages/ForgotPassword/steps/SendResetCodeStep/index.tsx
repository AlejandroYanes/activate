import React, { FunctionComponent } from 'react';
import { Button } from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import { StepContent, Step, StepTitle, Message } from '../../styled';
import { SendResetCodeBox } from './styled';
import useSendResetCodeState, { validationRules } from './state';

interface Props {
  onSuccess: () => void;
}

const SendResetCodeStep: FunctionComponent<Props> = (props) => {
  const { onSuccess: goNextStep } = props;
  const {
    state: {
      formValue,
      errors,
      callingAPI,
    },
    actions: {
      setFormValue,
      setErrors,
      sendResetCode,
    },
  } = useSendResetCodeState(goNextStep);

  return (
    <Step>
      <StepContent>
        <StepTitle>Forgot your password?</StepTitle>
        <Message>
          Enter the email address you used to create your account.
          We will send you an email with a code to reset your password.
        </Message>
        <SendResetCodeBox>
          <Form
            onChange={setFormValue}
            state={formValue}
            errors={errors}
            onError={setErrors}
            rules={validationRules}
          >
            <Field name="email" label="Email" margin="0 !important" />
          </Form>
          <Button
            onClick={sendResetCode}
            loading={callingAPI}
            padding="0 16px"
            label="Send Reset Code"
            variant="fill"
            color="brand"
          />
        </SendResetCodeBox>
      </StepContent>
    </Step>
  );
};

export default SendResetCodeStep;
