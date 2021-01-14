import styled from 'styled-components';
import Colors from 'styles/colors';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.LIGHT_GRAY};
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
