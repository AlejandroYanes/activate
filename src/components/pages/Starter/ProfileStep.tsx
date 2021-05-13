import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Text, Title } from 'components/base-components/Typography';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Field, Form } from 'components/base-components/Form';
import Avatar from 'components/base-components/Avatar';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import { ManWriting } from 'components/base-components/Illustrations';
import RenderIf from 'components/base-components/RenderIf';
import { Step, Content, Aside } from './styled/step';
import { HiddenInput } from './styled/profile';

interface Props {
  onNext: (profile) => void;
}

interface Profile {
  name: string;
  lastName: string;
  avatarUrl: string | File;
}

enum AvatarOptions {
  ADD = 'add',
  PHOTO = 'PHOTO',
  USER_1 = 'user1',
  USER_2 = 'user2',
  USER_3 = 'user3',
  USER_4 = 'user4',
}

const ProfileStep: FunctionComponent<Props> = (props) => {
  const { onNext } = props;
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [errors, setErrors] = useState<any>({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const filePickerRef = useRef(undefined);

  const handleAvatarFieldChange = useCallback((value, setFields) => {
    if (value === AvatarOptions.ADD) {
      filePickerRef.current.click();
    } else {
      setFields({ avatarUrl: value });
    }
  }, []);

  const handleFileInputChange = useCallback((event) => {
    const image = (event.target as HTMLInputElement).files[0];

    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const preview = reader.result;
        setImage(image);
        setImagePreview(preview);
        setProfile((old) => ({ ...old, avatarUrl: AvatarOptions.PHOTO }));
      };

      reader.readAsDataURL(image);
    }
  }, []);

  return (
    <Step>
      <Content>
        <Title level={2}>Tell us about you</Title>
        <Form
          onChange={setProfile}
          state={profile}
          onError={setErrors}
          errors={errors}
        >
          <FlexBox direction="column" align="stretch" width={380} mT>
            <Field name="name" label="Name" />
            <Field name="lastName" label="Last Name" mT />
          </FlexBox>
          <Text padding="24px 0 16px 20px">Pick an avatar</Text>
          <Field
            name="avatarUrl"
            component={PickList}
            onChange={handleAvatarFieldChange}
            size="small"
          >
            <PickItem value={AvatarOptions.ADD}>
              <SvgIcon icon={Icons.CAMERA_ADD} size="x-large" />
            </PickItem>
            <RenderIf condition={imagePreview}>
              <PickItem value={AvatarOptions.PHOTO}>
                <Avatar url={imagePreview} size="large" />
              </PickItem>
            </RenderIf>
            <PickItem value={AvatarOptions.USER_1}>
              <Avatar icon="user5" size="large" />
            </PickItem>
            <PickItem value={AvatarOptions.USER_2}>
              <Avatar icon="user2" size="large" />
            </PickItem>
            <PickItem value={AvatarOptions.USER_3}>
              <Avatar icon="user6" size="large" />
            </PickItem>
            <PickItem value={AvatarOptions.USER_4}>
              <Avatar icon="user7" size="large" />
            </PickItem>
          </Field>
          <HiddenInput
            type="file"
            accept=".jpg,.jpeg,.png"
            ref={filePickerRef}
            onChange={handleFileInputChange}
          />
        </Form>
        <FlexBox width="100%" justify="flex-end" mT>
          <Button
            onClick={onNext}
            label="Next"
            variant="fill"
            padding="0 12px"
          />
        </FlexBox>
      </Content>
      <Aside>
        <ManWriting width={420} />
      </Aside>
    </Step>
  );
};

export default ProfileStep;
