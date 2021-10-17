import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Field,
  FlexBox,
  Form,
  Modal,
  PasswordInput,
  Text
} from 'activate-components';
import useChangePasswordState, { passwordRules } from './state';

const ChangePasswordModal: FunctionComponent = () => {
  const { goBack } = useHistory();
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

  const footer = (
    <>
      <Button
        onClick={goBack}
        label="Cancel"
        variant="fill"
        color="background"
        mR
      />
      <Button
        onClick={changePassword}
        loading={callingAPI}
        label="Change"
        variant="fill"
        color="brand"
      />
    </>
  );

  return (
    <Modal
      visible
      onClose={goBack}
      footer={footer}
      size="mobile"
      title="Change your password"
    >
      <FlexBox
        data-el="password-modal-body"
        padding="24px 16px"
        direction="column"
        align="stretch"
      >
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
      </FlexBox>
    </Modal>
  );
};

export default ChangePasswordModal;
