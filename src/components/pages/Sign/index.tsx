import { FunctionComponent, useState } from 'react';
import { PublicLayout } from 'components/experience/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Content, RightBlock, LeftBlock } from './styled';

const SignPage: FunctionComponent = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });
  return (
    <PublicLayout>
      <Content>
        <LeftBlock></LeftBlock>
        <RightBlock>
          <Form onChange={setCredentials} state={credentials}>
            <Field name="userName" label="User Name" mB />
            <Field name="password" label="Password" />
          </Form>
        </RightBlock>
      </Content>
    </PublicLayout>
  );
};

export default SignPage;
