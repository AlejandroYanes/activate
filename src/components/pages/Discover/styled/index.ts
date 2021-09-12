import styled from 'styled-components';
import { getBrandFontColor } from 'helpers';

export const Header = styled.h1`
  font-size: 80px;
  line-height: 64px;
  font-family: Raleway, sans-serif;
  font-weight: bolder;
  margin: 0;
  padding: 0;
  color: ${getBrandFontColor};
`;
