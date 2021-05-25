import React, { FunctionComponent, useState } from 'react';
import { validateEntity } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import { NumberInput } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import { CodeBox } from './styled';
import { codeRules } from './rules';

interface Props {
  onVerify: (code: number) => void;
  isLoading?: boolean;
}

const VerificationStep: FunctionComponent<Props> = (props) => {
  const { onVerify: verify, isLoading } = props;
  const [form, setForm] = useState<any>({ code: '' });
  const [errors, setErrors] = useState<any>({});

  const verifyUserCode = () => {
    const { hasErrors, errors } = validateEntity(form, codeRules);

    if (hasErrors) {
      setErrors(errors);
    } else {
      verify(form.code);
    }
  };

  return (
    <Step>
      <Content>
        <Title level={2}>{`Let's verify you`}</Title>
        <Text as="p" padding="16px 0 0 0">
          We sent you a 6 digit code to your email,
          we use this code to verify you are a real person.
        </Text>
        <Text as="p" padding="8px 0 0 0">
          Please check your email and type the code here.
        </Text>
        <CodeBox>
          <Form
            onChange={setForm}
            state={form}
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
            onClick={verifyUserCode}
            isLoading={isLoading}
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
