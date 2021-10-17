import React, { FunctionComponent } from 'react';
import {
  Field,
  FlexBox, Form, IconButton,
  Layout, LinkButton, PasswordInput,
  RenderIf, Tab,
  Tabset, Text,
  Title,
  useAppLayout
} from 'activate-components';
import Slider from './Slider';
import ActionBox from './ActionBox';
import useSignPageState, { SignAction, validationRules } from './state';
import { Content, OAuthBox, SignBox } from './styled';

const emptyAction = () => undefined;

const SignPage: FunctionComponent = () => {
  const layout = useAppLayout();

  const {
    state: {
      signAction,
      credentials,
      callingApi,
      errors,
    },
    actions: {
      setSignAction,
      setCredentials,
      setErrors,
      authenticate,
      signInWithGoogle,
      signInWithFacebook,
    },
  } = useSignPageState();

  return (
    <Content layout={layout}>
      <Slider />
      <SignBox layout={layout}>
        <FlexBox direction="column" align="stretch" mB>
          <RenderIf condition={layout !== Layout.MOBILE}>
            <Title
              level={1}
              color="brand"
              align="center"
              mB
            >
              {`${signAction} and enjoy`}
            </Title>
          </RenderIf>
          <Tabset
            activeTab={signAction}
            onTabChange={setSignAction}
            fullWidth
          >
            <Tab name={SignAction.SIGN_IN} label={SignAction.SIGN_IN} />
            <Tab name={SignAction.SIGN_UP} label={SignAction.SIGN_UP} />
          </Tabset>
        </FlexBox>
        <Form
          state={credentials}
          onChange={setCredentials}
          errors={errors}
          onError={setErrors}
          rules={validationRules}
        >
          <Field name="email" label="Email" />
          <Field
            name="password"
            label="Password"
            component={PasswordInput}
          />
          <RenderIf condition={!!errors.signError}>
            <Text color="error" padding="8px 0 8px 20px">
              {errors.signError}
            </Text>
          </RenderIf>
          <ActionBox
            signAction={signAction}
            callingApi={callingApi}
            onClick={authenticate}
          />
        </Form>
        <OAuthBox layout={layout}>
          <Text color="secondary">
            Or use your social media
          </Text>
          <div>
            <IconButton
              onClick={signInWithGoogle}
              icon="GOOGLE"
              color="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={signInWithFacebook}
              icon="FACEBOOK"
              color="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={emptyAction}
              icon="INSTAGRAM"
              color="accent"
              variant="fill"
              size="large"
            />
          </div>
        </OAuthBox>
        <LinkButton
          to="/app/sign"
          label="Forgot password?"
          margin="24px auto 0"
        />
      </SignBox>
    </Content>
  );
};

export default SignPage;
