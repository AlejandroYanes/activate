import styled from 'styled-components';
import { getMargins } from 'helpers';

export const Section = styled.section.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  ${getMargins};
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;
