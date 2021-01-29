import styled from 'styled-components';

export const Theme = styled.div`
  //height: 144px;
  //width: 184px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
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

export const DetailBox = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  height: 44px;
  box-sizing: border-box;
`;

export const ThemeName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.FONT};
`;
