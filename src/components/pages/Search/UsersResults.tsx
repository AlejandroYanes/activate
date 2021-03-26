import React, { FunctionComponent } from 'react';
import UserCard from 'components/experience/UserCard';
import FlexBox from 'components/base-components/FlexBox';

const UsersResults: FunctionComponent = () => {
  return (
    <FlexBox wrap justify="space-around">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </FlexBox>
  );
};

export default UsersResults;
