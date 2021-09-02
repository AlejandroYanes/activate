import React, { FunctionComponent, useRef } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import Avatar from 'components/base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { ErrorText } from 'components/base-components/Inputs';
import { LoadingScreen } from 'components/experience/Screens';
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
  onSuccess: () => void;
}

const ProfileStep: FunctionComponent<Props> = (props) => {
  const { onSuccess: goNextStep } = props;

  const layout = useAppLayout();
  const filePickerRef = useRef(undefined);
  const {
    state: {
      profile,
      imagePreview,
      errors,
      callingAPI,
      loadingData,
    },
    action: {
      setProfile,
      setErrors,
      handleAvatarChange,
      handleImageChange,
      handleSubmit,
    },
  } = useProfileStepState(filePickerRef, goNextStep);

  return (
    <Step>
      <Content>
        <RenderIf condition={!loadingData} fallback={<LoadingScreen />}>
          <Title weight="light" level={1}>Tell us about you</Title>
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
                <RenderIf condition={layout !== Layout.MOBILE}>
                  <NextButton
                    onClick={handleSubmit}
                    loading={callingAPI}
                    label="Next"
                    variant="fill"
                  />
                </RenderIf>
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
                  <PickItem value={AvatarOptions.MAN_2}>
                    <Avatar src={AvatarOptions.MAN_2} size="large" />
                  </PickItem>
                  <PickItem value={AvatarOptions.MAN_1}>
                    <Avatar src={AvatarOptions.MAN_1} size="large" />
                  </PickItem>
                  <PickItem value={AvatarOptions.ADD}>
                    <SvgIcon icon="CAMERA_ADD" size="x-large" />
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
            <RenderIf condition={layout === Layout.MOBILE}>
              <NextButton
                onClick={handleSubmit}
                loading={callingAPI}
                label="Next"
                variant="fill"
              />
            </RenderIf>
          </Form>
        </RenderIf>
      </Content>
      <Illustration step={2} />
    </Step>
  );
};

export default ProfileStep;
