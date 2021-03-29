import styled from 'styled-components';
import { mobileHeaderHeight } from 'styles/variables';

export const Section = styled.section`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: ${mobileHeaderHeight}px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4px 0 16px;
  margin: 0;
  overflow: hidden auto;
`;

export const Action = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 50%;
  position: absolute;
  display: flex;
  bottom: 8px;
  right: 12px;
`;

