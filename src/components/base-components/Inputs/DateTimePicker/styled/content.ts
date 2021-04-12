import styled from 'styled-components';
import { getColorStyles } from '../../Input/styled/input';
import { inputBorderRadius } from 'styles/variables';

const getRightPadding = (props) => `${props.padRight ? 48 : 16}px`;

export const StyledContent = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  padding: 8px ${getRightPadding} 8px 52px;
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  ${getColorStyles};
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  height: 20px;
`;


