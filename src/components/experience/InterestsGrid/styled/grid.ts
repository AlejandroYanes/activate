import styled from 'styled-components';
import FlexBox from 'components/base-components/FlexBox';

export const SectionTitle = styled(FlexBox)`
  grid-column: 1 / -1;
  justify-self: flex-start;
  margin-bottom: 16px;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;
