import React, { FunctionComponent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import { Field, Form } from 'components/base-components/Form';
import RenderIf from 'components/base-components/RenderIf';
import { PickItem, PickList } from 'components/base-components/PickList';
import Avatar from 'components/base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import { ErrorText } from 'components/base-components/Inputs';
import { Button } from 'components/base-components/Button';
import {
  AvatarsBox,
  HiddenInput,
  ImagePreview,
  InputBox,
  ProfileBox,
} from './styled';
import useEditProfileState, { AvatarOptions, profileRules } from './state';
import { Text } from '../../base-components/Typography';

const EditProfileModal: FunctionComponent = () => {
  const { goBack } = useHistory();
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
        onClick={handleSubmit}
        loading={savingProfile}
        label="Update"
        variant="fill"
      />
    </>
  );

  return (
    <Modal
      visible
      onClose={goBack}
      footer={footer}
      size="mobile"
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
            <Field name="userName" label="User Name" margin="0 0 24px 0 !important" />
            <Text>To be a good username it:</Text>
            <ul>
              <li>must use all lower case letters</li>
              <li>must be from 2 to 16 characters long</li>
              <li>can use numbers, just not the first character</li>
              <li>
                can not use punctuation signs
                (<strong> . : , ; </strong>)
              </li>
              <li>
                can not use special characters
                (<strong>{' ! @ # $ % ^ & * < > _ '}</strong>)
              </li>
            </ul>
            <Field name="email" label="Email" mT />
            <Field name="name" label="Name" />
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
                <SvgIcon icon="CAMERA_ADD" size="x-large" />
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
