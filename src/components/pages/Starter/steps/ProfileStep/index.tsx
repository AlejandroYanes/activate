import React, { FunctionComponent, useRef } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import Avatar from 'components/base-components/Avatar';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import { ManWriting } from 'components/base-components/Illustrations';
import RenderIf from 'components/base-components/RenderIf';
import { ErrorText } from 'components/base-components/Inputs';
import { Aside, Content, Step } from '../../styled/step';
import { HiddenInput } from './styled/profile';
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
          <FlexBox direction="row" align="stretch" padding="16px 0 0 0">
            <FlexBox direction="column" align="stretch" width="45%">
              <Field name="userName" label="User Name" />
              <Field name="name" label="Name" mT />
              <Field name="lastName" label="Last Name" mT />
            </FlexBox>
            <FlexBox direction="column" align="stretch" mL>
              <Field
                name="avatar"
                component={PickList}
                onChange={handleAvatarChange}
                size="small"
                layout="grid"
                cols={3}
              >
                <PickItem value={AvatarOptions.WOMAN_1}>
                  <Avatar icon={AvatarOptions.WOMAN_1} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.MAN_1}>
                  <Avatar icon={AvatarOptions.MAN_1} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.ADD}>
                  <SvgIcon icon={Icons.CAMERA_ADD} size="x-large" />
                </PickItem>
                <PickItem value={AvatarOptions.WOMAN_2}>
                  <Avatar icon={AvatarOptions.WOMAN_2} size="large" />
                </PickItem>
                <PickItem value={AvatarOptions.MAN_2}>
                  <Avatar icon={AvatarOptions.MAN_2} size="large" />
                </PickItem>
                <RenderIf condition={!!imagePreview}>
                  <PickItem value={AvatarOptions.PHOTO}>
                    <Avatar url={imagePreview} size="large" />
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
            </FlexBox>
          </FlexBox>
          <FlexBox width="100%" justify="flex-end" mT>
            <Button
              onClick={handleSubmit}
              isLoading={isLoading}
              label="Next"
              variant="fill"
              padding="0 12px"
            />
          </FlexBox>
        </Form>
      </Content>
      <Aside>
        <ManWriting width={420} />
      </Aside>
    </Step>
  );
};

export default ProfileStep;
