import styled from 'styled-components';

export const ThemeList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow-y: auto;
  padding: 0;
`;

export const Theme = styled.li`
  height: 144px;
  width: 184px;
  border-radius: 16px;
  //margin-right: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.GRAY_LIGHT};
  transition: all .2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.ACCENT};
  }
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
`;
