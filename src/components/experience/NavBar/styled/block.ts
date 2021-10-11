import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { anyPropsAttrs, getBrandColor } from 'helpers';
import { Layout } from 'components/providers/Layout';
import SelectedBubble from '../SelectedBubble';

export const Block = styled.li`
  height: 78px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${getBrandColor};
  transition: all 150ms linear;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const getPositionStyles = (props) => {
  const { layout, selected } = props;

  if (layout === Layout.MOBILE) {
    return css`
      transform: rotate(90deg);
      top: ${selected ? '24px' : '92px'};
    `;
  }

  return css`right: ${selected ? '-30px' : '-92px'}`;
};

export const StyledBubble = styled(SelectedBubble).attrs(anyPropsAttrs)`
  position: relative;
  transform: scaleX(1.05);
  ${getPositionStyles};
  transition: all .2s;
`;

export const Label = styled.span`
  display: flex;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${ZLevels.componentLevel1};
`;
