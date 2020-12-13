import styled from 'styled-components';
import Colors from 'styles/colors';
import { inputBorderRadius } from 'styles/variables';

const getRightPadding = (props) => `${props.padRight ? 38 : 16}px`;

const getDirection = (props) => props.vertical ? 'column' : 'row';

export const StyledContent = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: ${getDirection};
  justify-content: flex-start;
  align-items: center;
  padding: 8px ${getRightPadding} 8px 16px;
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  background-color: ${Colors.WHITE};
  cursor: pointer;

  &:hover {
    border-color: ${Colors.DARK};
  }

  &:focus {
    border-color: ${Colors.BRAND_DARK};
  }
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${Colors.GRAY};
  height: 20px;
`;

export const DateStamp = styled.span`
  margin: 0 16px;
`;
