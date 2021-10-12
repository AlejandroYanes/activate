import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const wrapperStyleMap = {
  [Layout.DESKTOP]: css`
    width: 45%;
    position: relative;
  `,
  [Layout.TABLET]: css`
    position: relative;
    width: 100%;
    margin-top: 80px;
  `,
  [Layout.MOBILE]: css`
    display: none;
  `,
};

export const SliderWrapper = styled.div.attrs(anyPropsAttrs)`
  ${({ layout }) => wrapperStyleMap[layout]};
  height: ${({ height }) => `${height + 70}px`};
`;

export const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
