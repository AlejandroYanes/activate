import styled from 'styled-components';
import { Title } from 'components/base-components/Typography';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 16px;
  padding: 24px;
`;

export const SubTitle = styled(Title)`
  margin: 0 0 24px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
