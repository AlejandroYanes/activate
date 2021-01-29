import styled from 'styled-components';
import Colors from 'styles/colors';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 16px;
  padding: 24px;
`;

export const SubTitle = styled.h3`
  font-weight: lighter;
  color: ${Colors.GRAY};
  margin: 0 0 24px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
