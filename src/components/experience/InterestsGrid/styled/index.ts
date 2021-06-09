import styled from 'styled-components';
import { Text } from 'components/base-components/Typography';

export const SectionTitle = styled(Text)`
  grid-column: 1 / -1;
  justify-self: flex-start;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const Interest = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > span {
    width: 100%;
  }
`;
