import React, { FunctionComponent, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { StyledActionPage } from './styled';
import { getLtRPath as getPath } from './utils';

interface Props {
  isOpen: boolean;
}

const ActionPage: FunctionComponent<Props> = (props) => {
  const { isOpen } = props;
  const d = useSpring(useMotionValue(getPath(0, 0)));

  useEffect(() => {
    if (isOpen) {
      d.set(getPath(50, 300));
      setTimeout(() => {
        d.set(getPath(-50, 380));
        setTimeout(() => {
          d.set(getPath(0, 380));
          setTimeout(() => d.set(getPath(0, 0)), 5000);
        }, 200);
      }, 200);
    }
  }, [isOpen, d]);

  if (isOpen) {
    return (
      <>
        <svg version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clippingBox">
            <motion.path id="blobPath" d={d} />
          </clipPath>
        </svg>
        <StyledActionPage>
          <span style={{ margin: '0 auto' }}>Actions!!!!!</span>
        </StyledActionPage>
      </>
    );
  }

  return null;
};

export default ActionPage;
