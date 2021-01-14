import styled from 'styled-components';
import Colors from 'styles/colors';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  max-width: 60%;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
`;

export const AuthorName = styled.span`
  font-size: 12px;
  margin-top: 4px;
  color: ${Colors.GRAY_DARK};
  margin-bottom: 16px;
`;
