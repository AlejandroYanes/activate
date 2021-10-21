import React, { FunctionComponent, useRef } from 'react';
import {
  Avatar,
  Button,
  ErrorText,
  Field,
  FlexBox,
  Form,
  PickItem,
  PickList,
  RenderIf,
  SvgIcon,
  Text,
  Title
} from 'activate-components';
import { HiddenInput, ImagePreview } from './styled';
import useEditProfileState, { AvatarOptions, profileRules } from './state';

const EditProfileSection: FunctionComponent = () => {
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

  return (
    <>
      <Title level={2} mB>Edit your profile</Title>
      <FlexBox direction="column" align="stretch" margin="0 auto" width={420}>
        <Form
          onChange={setProfile}
          state={profile}
          onError={setErrors}
          errors={errors}
          rules={profileRules}
        >
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
          <Field
            name="avatar"
            component={PickList}
            onChange={handleAvatarChange}
            size="small"
            layout="grid"
            color="brand"
            cols={3}
            mT
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
        </Form>
        <FlexBox justify="flex-end" mT>
          <Button
            onClick={handleSubmit}
            loading={savingProfile}
            label="Update"
            variant="fill"
          />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default EditProfileSection;
