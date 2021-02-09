import styled from 'styled-components';
import { inputBorderRadius } from 'styles/variables';
import { getColorStyles } from 'components/base-components/Inputs/Input/styled/input';

export const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  height: 20px;
`;

export const DateStamp = styled.span`
  margin: 0 16px;
`;

const getRightPadding = (props) => `${props.padRight ? 38 : 16}px`;

const getDirection = (props) => props.vertical ? 'column' : 'row';

export const StyledContent = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: ${getDirection};
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
  padding: 8px ${getRightPadding} 8px 16px;
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  ${getColorStyles};
`;
