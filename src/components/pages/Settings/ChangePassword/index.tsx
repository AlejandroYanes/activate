import { FunctionComponent } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Field, Form } from 'components/base-components/Form';
import { PasswordInput } from 'components/base-components/Inputs';
import { Title } from 'components/base-components/Typography';
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
