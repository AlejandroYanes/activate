import React, { FunctionComponent } from 'react';
import { Button, Field, Form, NumberInput, PasswordInput } from 'activate-components';
import { StepContent, Step, StepTitle, Message } from '../../styled';
import { ResendCodeButton } from './styled';
import useResetPasswordState, { validationRules } from './state';

const ResetPasswordStep: FunctionComponent = () => {
  const {
    state: {
      formValue,
      errors,
      callingAPI,
    },
    actions: {
      setFormValue,
      setErrors,
      resetPassword,
      sendResetCode,
    },
  } = useResetPasswordState();

  return (
    <Step>
      <StepContent>
        <StepTitle>Password Reset</StepTitle>
        <Message>
          We sent you a 6 digit reset password code to your email.
          Please check your email and type the code here.
        </Message>
        <Message>Did not receive an email?</Message>
        <ResendCodeButton
          onClick={sendResetCode}
          label="Resend Code"
          mB
          rightIcon="ARROW_RIGHT"
          variant="outline"
        />
        <Form
          onChange={setFormValue}
          state={formValue}
          errors={errors}
          onError={setErrors}
          rules={validationRules}
          mT
        >
          <Field
            component={NumberInput}
            name="verificationCode"
            label="Your code"
          />
          <Field
            name="newPassword"
            label="New Password"
            component={PasswordInput}
          />
        </Form>
        <Button
          onClick={resetPassword}
          loading={callingAPI}
          padding="0 16px"
          label="Update Password"
          variant="fill"
          color="brand"
        />
      </StepContent>
    </Step>
  );
};

export default ResetPasswordStep;
