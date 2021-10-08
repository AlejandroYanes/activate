import React, { FunctionComponent } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Field, Form } from 'components/base-components/Form';
import { PasswordInput } from 'components/base-components/Inputs';
import { Text, Title } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import useChangePasswordState, { passwordRules } from './state';

const ChangePasswordSection: FunctionComponent = () => {
  const {
    state: {
      formValue,
      errors,
      callingAPI,
    },
    actions: {
      setFormValue,
      setErrors,
      changePassword,
    },
  } = useChangePasswordState();

  return (
    <>
      <Title level={2} mB>Change your password</Title>
      <FlexBox direction="column" align="stretch" margin="0 auto" width="420px">
        <Form
          state={formValue}
          onChange={setFormValue}
          errors={errors}
          onError={setErrors}
          rules={passwordRules}
        >
          <Text>To be a good password it:</Text>
          <ul>
            <li>must be from 8 to 16 characters long</li>
            <li>must use at least one lower and upper case letter</li>
            <li>must use at least one number</li>
            <li>can use special characters, though its not mandatory</li>
          </ul>
          <Field
            name="current"
            label="Current Password"
            component={PasswordInput}
          />
          <Field
            name="newPassword"
            label="New Password"
            component={PasswordInput}
          />
          <Field
            name="confirm"
            label="Repeat New Password"
            component={PasswordInput}
          />
        </Form>
        <FlexBox justify="flex-end" mT>
          <Button
            onClick={changePassword}
            loading={callingAPI}
            label="Change"
            variant="fill"
            color="brand"
          />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default ChangePasswordSection;
