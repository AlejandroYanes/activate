import styled from 'styled-components';
import { Layout } from 'activate-components';

const sizeMap = {
  [Layout.DESKTOP]: 40,
  [Layout.TABLET]: 48,
  [Layout.MOBILE]: 32,
};

export const StepTitle = styled.h1`
  padding: 0;
  margin: 0 0 24px 0;
  font-family: Bitter-ExtraBold, sans-serif;
  font-weight: bold;
  font-size: ${({ theme: { layout } }) => sizeMap[layout]}px;
`;
