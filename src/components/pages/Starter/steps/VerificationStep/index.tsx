import React, { FunctionComponent } from 'react';
import { Text, Title } from 'components/base-components/Typography';
import { NumberInput } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import { CodeBox } from './styled';
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
        <Title weight="light" level={1}>{`Let's verify you`}</Title>
        <Text as="p" padding="16px 0 0 0">
          We sent you a 6 digit code to your email,
          we use this code to verify you are a real person.
        </Text>
        <Text as="p" padding="8px 0 0 0">
          Please check your email and type the code here.
        </Text>
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
