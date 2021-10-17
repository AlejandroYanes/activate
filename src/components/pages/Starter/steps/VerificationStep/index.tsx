import React, { FunctionComponent } from 'react';
import { Button, Field, Form, NumberInput } from 'activate-components';
import { Content, Step, StepTitle } from '../../styled';
import Illustration from '../Illustration';
import { CodeBox, Message } from './styled';
import useVerificationState, { codeRules } from './state';

interface Props {
  onSuccess: () => void;
}

const VerificationStep: FunctionComponent<Props> = (props) => {
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
      verifyUser,
    },
  } = useVerificationState(goNextStep);

  return (
    <Step>
      <Content>
        <StepTitle>{`Let's verify you`}</StepTitle>
        <Message>
          We sent you a 6 digit code to your email,
          we use this code to verify you are a real person.
          Please check your email and type the code here.
        </Message>
        <CodeBox>
          <Form
            onChange={setFormValue}
            state={formValue}
            errors={errors}
            onError={setErrors}
            rules={codeRules}
          >
            <Field
              component={NumberInput}
              name="code"
              label="Your code"
              margin="0 !important"
            />
          </Form>
          <Button
            onClick={verifyUser}
            loading={callingAPI}
            padding="0 16px"
            label="Verify"
            variant="fill"
            color="brand"
          />
        </CodeBox>
      </Content>
      <Illustration step={1} />
    </Step>
  );
};

export default VerificationStep;
