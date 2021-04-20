import { FunctionComponent, useState } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Button from 'components/base-components/Button';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import RenderIf from 'components/base-components/RenderIf';
import Slider from './Slider';
import ActionBox from './ActionBox';
import { Content, OAuthBox, SignBox } from './styled';
import PasswordInput from '../../base-components/Inputs/PasswordInput';

const emptyAction = () => undefined;

export enum SignAction {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up'
}

const SignPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const [signAction, setSignAction] = useState<SignAction>(SignAction.SIGN_IN);
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });

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
          <Field name="userName" label="User Name" mB />
          <RenderIf condition={signAction === SignAction.SIGN_UP}>
            <Field name="email" label="Email" mB />
          </RenderIf>
          <Field
            name="password"
            label="Password"
            component={PasswordInput}
            mB
          />
          <ActionBox signAction={signAction} />
        </Form>
        <OAuthBox layout={layout}>
          <Text color="secondary">
            Or use your social media
          </Text>
          <div>
            <Button
              onClick={emptyAction}
              leftIcon={Icons.GOOGLE}
              label={`${signAction} with Google`}
            />
            <Button
              onClick={emptyAction}
              leftIcon={Icons.FACEBOOK}
              label={`${signAction} with Facebook`}
            />
          </div>
        </OAuthBox>
      </SignBox>
    </Content>
  );
};

export default SignPage;
