import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'styles/colors';
import { ZLevels } from 'styles/z-levels';
import SelectedBubble from '../SelectedBubble';

export const Block = styled.li`
  height: 78px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.BRAND};
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const getRightPosition = ({ selected }) => selected ? '-30px' : '-92px';

export const StyledBubble = styled(SelectedBubble).attrs((props: { selected?: boolean }) => props)`
  position: relative;
  right: ${getRightPosition};
  transform: scaleX(1.05);
  transition: all .2s;
`;

const getColorStyle = ({ selected, theme }) => selected ? theme.BRAND : theme.WHITE;

export const Label = styled.span.attrs((props: { selected: boolean }) => props)`
  display: flex;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${getColorStyle};
  z-index: ${ZLevels.sideMenuBlocks};
`;
