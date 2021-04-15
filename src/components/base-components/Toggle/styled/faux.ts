import styled from 'styled-components';
import { motion } from 'framer-motion';
import { anyPropsAttrs } from 'helpers';

const getOffColors = (props) => {
  const { theme: { useDarkStyle, colors } } = props;

  if (useDarkStyle) {
    return `
      background-color: ${colors.GRAY_DARK};

      &:hover, &:focus {
        background-color: ${colors.GRAY};
      }
    `;
  }

  return `
      background-color: ${colors.GRAY};

      &:hover, &:focus {
        background-color: ${colors.GRAY_DARK};
      }
    `;
};

const getOnColors = (props) => {
  const { theme: { colors } } = props;

  return `
      background-color: ${colors.ACCENT};

      &:hover, &:focus {
        background-color: ${colors.ACCENT_HIGHLIGHT};
      }
    `;
};

const getStyles = (props) => {
  const { checked } = props;

  return `
    justify-content: ${checked ? 'flex-end' : 'flex-start'};
    ${checked ? getOnColors(props) : getOffColors(props)}
  `;
};

export const FauxContainer = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  height: 24px;
  min-width: 48px;
  border-radius: 18px;
  overflow: hidden;
  padding: 2px;
  ${getStyles};
`;

export const FauxNob = styled(motion.div)`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
