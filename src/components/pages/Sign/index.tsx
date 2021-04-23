import { FunctionComponent, useCallback, useState } from 'react';
import authApi from 'api/auth';
import { AuthCredentials } from 'models/user';
import { useAuthActions } from 'components/providers/Auth';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Button from 'components/base-components/Button';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import RenderIf from 'components/base-components/RenderIf';
import { PasswordInput } from 'components/base-components/Inputs';
import Slider from './Slider';
import ActionBox from './ActionBox';
import { Content, OAuthBox, SignBox } from './styled';

const emptyAction = () => undefined;

export enum SignAction {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up'
}

const SignPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const { login } = useAuthActions();
  const [signAction, setSignAction] = useState<SignAction>(SignAction.SIGN_IN);
  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password: '',
  });

  const authenticate = useCallback(() => {
    // const action = (
    //   signAction === SignAction.SIGN_IN
    //     ? authApi.signIn
    //     : authApi.signUp
    // );

    authApi.signIn({ ...credentials } as any)
      .then((response) => {
        const { data: { email, sub } } = response;
        login({ sub, email });
      });
  }, [signAction, credentials]);

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
        <Form onChange={setCredentials} state={credentials}>
          <Field name="email" label="Email" mB />
          <Field
            name="password"
            label="Password"
            component={PasswordInput}
            mB
          />
          <ActionBox signAction={signAction} onClick={authenticate} />
        </Form>
        <OAuthBox layout={layout}>
          <Text color="secondary">
            Or use your social media
          </Text>
          <div>
            <Button
              onClick={emptyAction}
              leftIcon={Icons.GOOGLE}
              label="Use Google"
              padding="0 16px"
            />
            <Button
              onClick={emptyAction}
              leftIcon={Icons.FACEBOOK}
              label="Use Facebook"
              padding="0 16px"
            />
          </div>
        </OAuthBox>
      </SignBox>
    </Content>
  );
};

export default SignPage;
