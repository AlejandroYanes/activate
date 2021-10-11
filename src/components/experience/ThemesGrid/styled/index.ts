import styled from 'styled-components';

export const Theme = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Palette = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
`;

const getBackgroundColor = ({ color }) => color;

export const ColorSample = styled.div.attrs(((props: { color: string }) => props))`
  flex: 1;
  background-color: ${getBackgroundColor};
`;
