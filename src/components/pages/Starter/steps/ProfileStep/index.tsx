import React, { FunctionComponent, useRef } from 'react';
import { Title } from 'components/base-components/Typography';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import Avatar from 'components/base-components/Avatar';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { ErrorText } from 'components/base-components/Inputs';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import {
  AvatarsBox,
  HiddenInput,
  ImagePreview,
  InputBox,
  NextButton,
  ProfileBox,
} from './styled';
import useProfileStepState, { AvatarOptions, profileRules } from './state';

interface Props {
  onNext: (profile) => void;
  isLoading: boolean;
}

const ProfileStep: FunctionComponent<Props> = (props) => {
  const { isLoading, onNext } = props;
  const filePickerRef = useRef(undefined);
  const {
    state: {
      profile,
      imagePreview,
      errors,
    },
    action: {
      setProfile,
      setErrors,
      handleAvatarChange,
      handleImageChange,
      handleSubmit,
    },
  } = useProfileStepState(filePickerRef, onNext);

  return (
    <Step>
      <Content>
        <Title level={2}>Tell us about you</Title>
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
                cols={2}
              >
                <PickItem value={AvatarOptions.WOMAN_1}>
                  <Avatar src={AvatarOptions.WOMAN_1} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.WOMAN_2}>
                  <Avatar src={AvatarOptions.WOMAN_2} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.MAN_1}>
                  <Avatar src={AvatarOptions.MAN_1} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.MAN_2}>
                  <Avatar src={AvatarOptions.MAN_2} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.ADD}>
                  <SvgIcon icon={Icons.CAMERA_ADD} size="x-large" />
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
          <NextButton
            onClick={handleSubmit}
            isLoading={isLoading}
            label="Next"
            variant="fill"
          />
        </Form>
      </Content>
      <Illustration step={2} />
    </Step>
  );
};

export default ProfileStep;
