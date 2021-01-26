import styled from 'styled-components';
import Colors from 'styles/colors';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE};
  border-radius: 16px;
  padding: 16px;
`;

export const SubTitle = styled.h3`
  padding-left: 16px;
  font-weight: lighter;
  color: ${Colors.GRAY_DARK};
`;

export const ThemeList = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
`;

export const Theme = styled.li`
  height: 144px;
  width: 184px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 32px;
  border: 1px solid ${Colors.BACKGROUND};

  &:hover {
    border-color: ${Colors.GRAY};
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
