import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PasswordInput } from 'components/base-components/Inputs';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import { IconButton } from 'components/base-components/Button';
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
        <FlexBox justify="space-between" mB>
          <RenderIf condition={layout !== Layout.MOBILE}>
            <Title
              level={1}
              color="brand"
              weight="light"
            >
              {`${signAction} and enjoy`}
            </Title>
          </RenderIf>
          <Tabset
            activeTab={signAction}
            onTabChange={setSignAction}
            fullWidth={layout === Layout.MOBILE}
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
          <Field name="email" label="Email" mB />
          <Field
            name="password"
            label="Password"
            component={PasswordInput}
            mB
          />
          <RenderIf condition={!!errors.signError}>
            <Text color="error" padding="8px 0 8px 20px">{errors.signError}</Text>
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
      </SignBox>
    </Content>
  );
};

export default SignPage;
