import styled from 'styled-components';
import { ButtonProps } from '../index';
import { Colors } from '../../SvgIcon/colors';

const getMr = (props: ButtonProps) => props.mR ? '1rem' : '0';

const getBackgroundColor = (props: ButtonProps) => {
  const { variant, color } = props;

  if (variant === 'fill') {
    switch (color) {
      case 'brand':
        return Colors.BRAND;
      case 'success':
        return Colors.SUCCESS;
      case 'warning':
        return Colors.WARNING;
      case 'error':
        return Colors.ERROR;
      case 'white':
        return Colors.WHITE;
    }
  }

  return 'transparent';
};

const getFontColor = (props: ButtonProps) => {
  const { variant, color } = props;

  if (variant === 'fill') {
    switch (color) {
      case 'white':
        return Colors.DARK;
      case 'warning':
        return Colors.DARK;
      default:
        return Colors.WHITE;
    }
  }

  switch (color) {
    case 'brand':
      return Colors.BRAND;
    case 'success':
      return Colors.SUCCESS;
    case 'warning':
      return Colors.WARNING;
    case 'error':
      return Colors.ERROR;
    case 'white':
      return Colors.WHITE;
  }
};

const getBorder = (props: ButtonProps) => {
  const { variant, color } = props;
  const borderStyle = 'solid 1px ';

  if (variant === 'outline' || variant === 'fill') {
    switch (color) {
      case 'brand':
        return `${borderStyle} ${Colors.BRAND}`;
      case 'success':
        return `${borderStyle} ${Colors.SUCCESS}`;
      case 'warning':
        return `${borderStyle} ${Colors.WARNING}`;
      case 'error':
        return `${borderStyle} ${Colors.ERROR}`;
      case 'white':
        return `${borderStyle} ${Colors.WHITE}`;
    }
  }

  return `${borderStyle} transparent`;
};

const getHoveredBorderColor = (props: ButtonProps) => {
  const { color } = props;

  switch (color) {
    case 'brand':
      return Colors.BRAND;
    case 'success':
      return Colors.SUCCESS;
    case 'warning':
      return Colors.WARNING;
    case 'error':
      return Colors.ERROR;
    case 'white':
      return Colors.WHITE;
  }
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 10px;
  height: 42px;
  font-size: 1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: pointer;
  transition: all ease-in-out 120ms;
  margin-right: ${getMr};
  color: ${getFontColor};
  background-color: ${getBackgroundColor};
  border: ${getBorder};

  &:hover {
    border-color: ${getHoveredBorderColor};
  }
`;

export default StyledButton;
