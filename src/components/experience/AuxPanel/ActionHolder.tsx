import React, { FunctionComponent, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Colors from 'styles/colors';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import IconButton from 'components/base-components/IconButton';
import { getRtLPath as getPath } from './utils';
import { StyledActionHolder, StyledAction } from './styled';

interface Props {
  onActionSelected: () => void;
}

const ActionHolder: FunctionComponent<Props> = (props) => {
  const { onActionSelected } = props;
  const [isAnimating, setIsAnimating] = useState(false);
  const d = useSpring(useMotionValue(getPath(0, 0)));
  const right = useSpring(useMotionValue(-20));
  const opacity = useSpring(useMotionValue(0));

  useEffect(() => {
    setTimeout(() => {
      d.set(getPath(48, 2));
    }, 100);
    setTimeout(() => {
      right.set(0);
      opacity.set(1);
    }, 150);
  }, []);

  const inflateCurve = () => {
    if (!isAnimating) {
      d.set(getPath(64, 4));
      right.set(16);
    }
  };

  const resetCurve = () => {
    if (!isAnimating) {
      d.set(getPath(48, 2));
      right.set(0);
    }
  };

  const handleActionSelected = () => {
    setIsAnimating(true);
    d.set(getPath(0, 0));
    right.set(-160);
    opacity.set(0);
    onActionSelected();

    setTimeout(() => {
      d.set(getPath(48, 2));
      right.set(0);
      opacity.set(1);
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <StyledActionHolder>
      <svg version="1.1" width="80" xmlns="http://www.w3.org/2000/svg">
        <motion.path d={d} fill={Colors.BRAND_LIGHT} />
      </svg>
      <StyledAction
        onHoverStart={inflateCurve}
        onHoverEnd={resetCurve}
        style={{ right, opacity }}
      >
        <IconButton
          onClick={handleActionSelected}
          icon={Icons.SEARCH}
          color={Colors.SUCCESS}
          buttonColor="success"
          style={{ marginRight: '8px' }}
        />
      </StyledAction>
    </StyledActionHolder>
  );
};

export default ActionHolder;
