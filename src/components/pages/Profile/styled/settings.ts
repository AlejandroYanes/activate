import styled from 'styled-components';
import Colors from 'styles/colors';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 16px;
  padding: 16px;
`;

export const SubTitle = styled.h3`
  padding-left: 16px;
  font-weight: lighter;
  color: ${Colors.GRAY_DARK};
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
