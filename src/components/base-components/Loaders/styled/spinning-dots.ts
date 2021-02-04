import styled, { keyframes } from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  'x-small': 'width: 16px; height: 16px',
  small: 'width: 20px; height: 20px',
  medium: 'width: 48px; height: 48px',
  large: 'width: 60px; height: 60px',
  page: 'width: 100px; height: 100px',
};

export const Wrapper = styled.div.attrs(anyPropsAttrs)`
  position: relative;
  ${getMargins};
  ${({ size }) => sizeMap[size]};

  & div:first-child{
    animation-delay:-2s;
  }
  & div:nth-child(2){
    animation-delay:-1.5s;
  }
  & div:nth-child(3){
    animation-delay:-1s;
  }
  & div:nth-child(4){
    animation-delay:-0.5s;
  }
`;

const spin = keyframes`
  0%,100%{transform:translate(0)}
  25%{transform:translate(160%)}
  50%{transform:translate(160%, 160%)}
  75%{transform:translate(0, 160%)}
`;

export const Dot = styled.div.attrs(anyPropsAttrs)`
  border:0;
  margin:0;
  width:40%;
  height:40%;
  position:absolute;
  border-radius:50%;
  background-color: ${({ color }) => color};
  animation: ${spin} 2s ease infinite;
`;
