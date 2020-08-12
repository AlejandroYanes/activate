import styled from 'styled-components';
import Colors from 'styles/colors';

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.ACCENT_DARK};
  margin-top: 18px;

  & > h3 {
    margin: 4px 0;
  }
`;
