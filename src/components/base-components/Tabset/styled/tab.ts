import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  position: relative;
  min-width: 50%;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  min-width: 64px;
`;

export const Label = styled.span.attrs((props: any) => props)`
  ${(props) => (props.spaced ? 'margin-left: 8px' : '')};
  color: ${Colors.GRAY};
  transition: all 150ms linear;
`;

export const Mark = styled(motion.div)`
  width: 100%;
  height: 2px;
  border-radius: 50px;
  background-color: ${Colors.BRAND};
  position: absolute;
  bottom: 0;
`;

const getWidthStyles = (props) => (props.fullWidth ? 'flex: 1' : '');

const getSelectedStyles = (props) => {
  const { selected } = props;

  if (selected) {
    return `
      ${Label} {
        color: ${Colors.BRAND}
      }
    `;
  }
  return '';
};

const getHoverStyles = (props) => {
  const { selected } = props;

  return `
     background-color: ${selected ? Colors.BRAND_SHADE : Colors.GRAY_SHADE};

    ${Label}{
      color: ${selected ? Colors.BRAND_DARK : Colors.GRAY_DARK}
    }

    ${Mark}{
      background-color: ${selected ? Colors.BRAND_DARK : 'none'};
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
  min-width: 80px;
  cursor: pointer;
  border-radius: 6px;
  ${getWidthStyles};
  ${getSelectedStyles};

  &:hover {
   ${getHoverStyles}
  }
`;
