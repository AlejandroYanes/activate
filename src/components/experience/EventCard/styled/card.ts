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
`;
