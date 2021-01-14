import styled from 'styled-components';
import Colors from 'styles/colors';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40%;
`;

export const InfoEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${Colors.GRAY_DARK};
  margin-bottom: 12px;
  font-size: 14px;

  & > span {
  margin-left: 6px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
