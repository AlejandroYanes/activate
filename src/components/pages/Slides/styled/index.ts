import styled from 'styled-components';
import { getBrandFontColor } from 'helpers';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 32px;
  //margin: 0 auto;
`;

export const Header = styled.h1`
  font-size: 60px;
  line-height: 56px;
  font-family: Raleway, sans-serif;
  font-weight: bolder;
  margin: 0;
  padding: 0;
  color: ${getBrandFontColor};
`;

export const Liner = styled.div`
  width: 80%;
  height: 2px;
  margin: 0 auto;
  background-color: ${getBrandFontColor};
`;

export const Slide = styled.img`
  //width: 360px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 32px;
`;
