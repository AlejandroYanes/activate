import React, { FunctionComponent } from 'react';
import { Field, Form } from 'components/base-components/Form';
import { NumberInput, PasswordInput } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import { StepContent, Step, StepTitle, Message } from '../../styled';
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
        <Button
          onClick={sendResetCode}
          label="Resend Code"
          mB
          style={{ width: 'fit-content' }}
          rightIcon="ARROW_RIGHT"
          variant="outline"
        />
        <Form
          onChange={setFormValue}
          state={formValue}
          errors={errors}
          onError={setErrors}
          rules={validationRules}
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
