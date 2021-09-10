import styled from 'styled-components';
import UsersList from 'components/experience/UsersList';

export const Page = styled.section`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 66px);
`;

export const List = styled(UsersList)`
  width: 360px;
  min-width: 360px;
  padding: 16px;
`
