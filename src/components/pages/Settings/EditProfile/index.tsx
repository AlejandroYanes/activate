import React, { FunctionComponent, useRef } from 'react';
import { Field, Form } from 'components/base-components/Form';
import RenderIf from 'components/base-components/RenderIf';
import { PickItem, PickList } from 'components/base-components/PickList';
import Avatar from 'components/base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import { ErrorText } from 'components/base-components/Inputs';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import { Button } from 'components/base-components/Button';
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
          <Field name="userName" label="User Name" />
          <Field name="email" label="Email" />
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
