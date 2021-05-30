import React, { FunctionComponent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import { Field, Form } from 'components/base-components/Form';
import RenderIf from 'components/base-components/RenderIf';
import { PickItem, PickList } from 'components/base-components/PickList';
import Avatar from 'components/base-components/Avatar';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { ErrorText } from 'components/base-components/Inputs';
import FlexBox from 'components/base-components/FlexBox';
import { Button } from 'components/base-components/Button';
import { AvatarsBox, HiddenInput, ImagePreview, InputBox, ProfileBox } from './styled';
import useEditProfileState, { AvatarOptions, profileRules } from './state';

const EditProfileModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const layout = useAppLayout();
  const filePickerRef = useRef(undefined);
  const {
    state: {
      profile,
      imagePreview,
      errors,
      savingProfile,
    },
    action: {
      setProfile,
      setErrors,
      handleAvatarChange,
      handleImageChange,
      handleSubmit,
    },
  } = useEditProfileState(filePickerRef);

  const footerSpacing = (
    layout === Layout.MOBILE ? '0 6px 24px' : '24px 16px 0'
  );

  const footer = (
    <FlexBox justify="flex-end" padding={footerSpacing}>
      <Button
        onClick={goBack}
        label="Cancel"
        variant="fill"
        color="background"
        mR
      />
      <Button
        onClick={handleSubmit}
        loading={savingProfile}
        label="Update"
        variant="fill"
      />
    </FlexBox>
  );

  const modalSize = (
    layout === Layout.MOBILE ? 'mobile' : 'medium'
  );

  return (
    <Modal
      visible
      size={modalSize}
      onClose={goBack}
      footer={footer}
      title="Edit Profile"
    >
      <Form
        onChange={setProfile}
        state={profile}
        onError={setErrors}
        errors={errors}
        rules={profileRules}
      >
        <ProfileBox>
          <InputBox>
            <Field name="userName" label="User Name" />
            <Field name="email" label="Email" mT />
            <Field name="name" label="Name" mT />
            <Field name="lastName" label="Last Name" mT />
          </InputBox>
          <AvatarsBox>
            <Field
              name="avatar"
              component={PickList}
              onChange={handleAvatarChange}
              size="small"
              layout="grid"
              color="brand"
              cols={3}
            >
              <PickItem value={AvatarOptions.WOMAN_1}>
                <Avatar src={AvatarOptions.WOMAN_1} size="large" />
              </PickItem>
              <PickItem value={AvatarOptions.WOMAN_2}>
                <Avatar src={AvatarOptions.WOMAN_2} size="large" />
              </PickItem>
              <PickItem value={AvatarOptions.ADD}>
                <SvgIcon icon={Icons.CAMERA_ADD} size="x-large" />
              </PickItem>
              <PickItem value={AvatarOptions.MAN_2}>
                <Avatar src={AvatarOptions.MAN_2} size="large" />
              </PickItem>
              <PickItem value={AvatarOptions.MAN_1}>
                <Avatar src={AvatarOptions.MAN_1} size="large" />
              </PickItem>
              <RenderIf condition={!!imagePreview}>
                <PickItem value={AvatarOptions.PHOTO}>
                  <ImagePreview src={imagePreview} alt="user photo" />
                </PickItem>
              </RenderIf>
            </Field>
            <HiddenInput
              type="file"
              accept=".jpg,.jpeg,.png"
              ref={filePickerRef}
              onChange={handleImageChange}
            />
            <ErrorText text={errors.avatar} />
          </AvatarsBox>
        </ProfileBox>
      </Form>
    </Modal>
  );
};

export default EditProfileModal;
