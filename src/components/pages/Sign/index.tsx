import { FunctionComponent, useState } from 'react';
import { PublicLayout } from 'components/experience/Layout';
import { Field, Form } from 'components/base-components/Form';
import { ManLookingLaptop } from 'components/base-components/Illustrations';
import { Content, RightBlock, LeftBlock } from './styled';

const SignPage: FunctionComponent = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });
  return (
    <Content>
      <LeftBlock>
        <ManLookingLaptop height={500} />
      </LeftBlock>
      <RightBlock>
        <Form onChange={setCredentials} state={credentials}>
          <Field name="userName" label="User Name" mB />
          <Field name="password" label="Password" />
        </Form>
      </RightBlock>
    </Content>
  );
};

export default SignPage;
