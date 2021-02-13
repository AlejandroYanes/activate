import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useElementScroll, useTransform } from 'framer-motion';
import { PositionProps } from 'helpers';
import { Host, ScrollWrapper, BarSection, ScrollGuide, ScrollThumb } from './styled';

const ScrollHost: FunctionComponent<PositionProps> = (props) => {
  const { children, ...rest } = props;

  const containerRef = useRef(undefined);
  const scrollSectionRef = useRef(undefined);

  const [thumbHeight, setThumbHeight] = useState(20);
  const [maxScrollHeight, setMaxScrollHeight] = useState(1);

  const { scrollYProgress } = useElementScroll(containerRef);
  const top = useTransform(scrollYProgress, [0, 1], [0, maxScrollHeight]);
  const topStyle = useTransform(top, b => `${b}px`);

  useEffect(() => {
    const pageHeight = containerRef.current.scrollHeight;
    const containerHeight = containerRef.current.clientHeight;

    console.log(pageHeight);
    console.log(containerHeight);

    setThumbHeight((containerHeight * containerHeight) / pageHeight);
    setMaxScrollHeight(containerHeight - ((containerHeight * containerHeight) / pageHeight));
  }, []);

  const styles = {
    height: thumbHeight,
    top: topStyle,
  };

  return (
    <Host {...rest} data-el="scroll-host">
      <ScrollWrapper ref={containerRef} data-el="scroll-wrapper">
        {children}
      </ScrollWrapper>
      <BarSection ref={scrollSectionRef} data-el="scroll-bar-section">
        <ScrollGuide data-el="scroll-bar-guide" />
        <ScrollThumb
          style={styles}
          drag="y"
          dragConstraints={scrollSectionRef}
          data-el="scroll-bar-thumb"
        />
      </BarSection>
    </Host>
  );
};

export default ScrollHost;
