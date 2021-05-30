import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Field, Form } from 'components/base-components/Form';
import { PasswordInput } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import useChangePasswordState, { passwordRules } from './state';

const modalSizeMap = {
  [Layout.MOBILE]: 'mobile',
  [Layout.TABLET]: 'medium',
  [Layout.DESKTOP]: 'small',
};

const modalPaddingMap = {
  [Layout.MOBILE]: '24px 6px',
  [Layout.TABLET]: '0',
  [Layout.DESKTOP]: '0',
};

const ChangePasswordModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const layout = useAppLayout();
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

  const modalSize: any = modalSizeMap[layout];

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
      size={modalSize}
      footer={footer}
      title="Change your password"
    >
      <FlexBox
        data-el="password-modal-body"
        direction="column"
        align="stretch"
        padding={modalPaddingMap[layout]}
      >
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
            mT
          />
          <Field
            name="newPassword"
            label="New Password"
            component={PasswordInput}
            mT
          />
          <Field
            name="confirm"
            label="Repeat New Password"
            component={PasswordInput}
            mT
          />
        </Form>
      </FlexBox>
    </Modal>
  );
};

export default ChangePasswordModal;
