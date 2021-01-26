import styled from 'styled-components';
import { motion } from 'framer-motion';

const getContentSpacingStyles = (props) => {
  const { compact, selected } = props;

  if (compact) {
    if (selected) {
      return 'padding: 0 12px;';
    }
    return 'padding: 0;';
  }
  return 'padding: 0 12px;';
};

export const Content = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 50%;
  ${getContentSpacingStyles};
`;

export const Text = styled.div.attrs((props: any) => props)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  min-width: ${({ compact }) => compact ? '20px' : '64px'};
`;

export const Label = styled.span.attrs((props: any) => props)`
  ${(props) => (props.spaced ? 'margin-left: 8px' : '')};
  color: ${({ theme }) => theme.GRAY};
  transition: all 150ms linear;
`;

export const Mark = styled(motion.div)`
  width: 100%;
  height: 2px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.BRAND};
  position: absolute;
  bottom: 0;
`;

const getWidthStyles = (props) => {
  const { fullWidth, compact, selected } = props;
  const shouldUseFullwidth = (
    fullWidth &&
    (
      (compact && selected) ||
      !compact
    )
  );

  return `
    min-width: ${compact ? '20px' : '80px'};
    ${shouldUseFullwidth ? 'flex: 1' : ''}
  `;
};

const getSelectedStyles = (props) => {
  const { selected, theme } = props;

  if (selected) {
    return `
      ${Label} {
        color: ${theme.BRAND}
      }
    `;
  }
  return '';
};

const getHoverStyles = (props) => {
  const { selected, theme } = props;

  return `
     background-color: ${theme.BRAND_SHADE};

    ${Label}{
      color: ${theme.BRAND_DARK}
    }

    ${Mark}{
      background-color: ${selected ? theme.BRAND_DARK : 'none'};
    }
  `;
};

export const StyledTab = styled.li.attrs((props: any) => props)`
  padding: 8px 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  ${getWidthStyles};
  ${getSelectedStyles};

  &:hover {
   ${getHoverStyles}
  }
`;
