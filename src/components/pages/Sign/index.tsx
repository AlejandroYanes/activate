import { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PasswordInput } from 'components/base-components/Inputs';
import { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import IconButton from 'components/base-components/IconButton';
import Slider from './Slider';
import ActionBox from './ActionBox';
import { Content, OAuthBox, SignBox } from './styled';
import useSignPageState, { SignAction, validationRules } from './state';

const emptyAction = () => undefined;

const SignPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const colors = useAppColors();
  const {
    state: {
      signAction,
      credentials,
      errors,
    },
    actions: {
      setSignAction,
      setCredentials,
      setErrors,
      authenticate,
    },
  } = useSignPageState();

  return (
    <Content layout={layout}>
      <Slider />
      <SignBox layout={layout}>
        <FlexBox justify="space-between" mB>
          <RenderIf condition={layout !== Layout.MOBILE}>
            <Title level={2}>{`${signAction} and enjoy`}</Title>
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
          <ActionBox signAction={signAction} onClick={authenticate} />
        </Form>
        <OAuthBox layout={layout}>
          <Text color="secondary">
            Or use your social media
          </Text>
          <div>
            <IconButton
              onClick={emptyAction}
              icon={Icons.GOOGLE}
              color={colors.WHITE}
              buttonColor="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={emptyAction}
              icon={Icons.FACEBOOK}
              color={colors.WHITE}
              buttonColor="accent"
              variant="fill"
              size="large"
            />
            <IconButton
              onClick={emptyAction}
              icon={Icons.INSTAGRAM}
              color={colors.WHITE}
              buttonColor="accent"
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
