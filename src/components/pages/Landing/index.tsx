import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';

const LandingPage: FunctionComponent = () => {
  return (
    <FlexBox direction="column">
      <Title>Welcome to activate</Title>
      <Link to="/public">
        <Text mB>go to public routes</Text>
      </Link>
      <Link to="/app">
        <Text mT>go to app routes</Text>
      </Link>
    </FlexBox>
  );
};

export default LandingPage;
