import React, { FunctionComponent, useState } from 'react';
import { validateEntity } from 'helpers';
import FlexBox from 'components/base-components/FlexBox';
import { Text, Title } from 'components/base-components/Typography';
import { NumberInput } from 'components/base-components/Inputs';
import Button from 'components/base-components/Button';
import { ManWithCheckList } from 'components/base-components/Illustrations';
import { Field, Form } from 'components/base-components/Form';
import { Step, Content, Aside } from '../../styled/step';
import { codeRules } from '../../state';

interface Props {
  verify: (code: number) => void;
  isLoading?: boolean;
}

const VerificationStep: FunctionComponent<Props> = (props) => {
  const { verify, isLoading } = props;
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
          <br />
          Please check your email and type the code here.
        </Text>
        <FlexBox align="flex-start" margin="32px 0 0 0" width={320}>
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
            padding="0 12px"
            label="Verify"
            variant="fill"
            color="brand"
            margin="24px 0 0 24px"
          />
        </FlexBox>
      </Content>
      <Aside>
        <ManWithCheckList width={420} />
      </Aside>
    </Step>
  );
};

export default VerificationStep;
