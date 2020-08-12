import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const Card = styled.section`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: ${Colors.WHITE};
  margin-bottom: 32px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${Colors.BRAND_SHADE};

  &:hover {
    box-shadow: 0 0 1px 1px ${Colors.BRAND_SHADE};
  }
`;
