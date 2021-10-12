import { FunctionComponent, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import {
  FriendsTalking,
  ManLookingLaptop,
  PhoneWithWoman,
} from 'components/base-components/Illustrations';
import { Case, Switch } from 'components/base-components/Switch';
import { Text, Title } from 'components/base-components/Typography';
import { Slide, SliderWrapper } from './styled/slider';

const slideVariants = {
  preStart: { left: '-20%', opacity: 0 },
  start: { left: '0', opacity: 1 },
  exit: { left: '20%', opacity: 0 },
};

const sizeMap = {
  [Layout.DESKTOP]: 440,
  [Layout.TABLET]: 330,
  [Layout.MOBILE]: 330,
};

const Slider1 = ({ height }) => (
  <Slide
    variants={slideVariants}
    initial="preStart"
    animate="start"
    exit="exit"
  >
    <ManLookingLaptop height={height} />
    <Title level={2} margin="8px 0">
      All the information you need.
    </Title>
    <Text>
      Find all the information you need about any event and more.
    </Text>
  </Slide>
);

const Slider2 = ({ height }) => (
  <Slide
    variants={slideVariants}
    initial="preStart"
    animate="start"
    exit="exit"
  >
    <PhoneWithWoman height={height} />
    <Title level={2} margin="8px 0">In your hands.</Title>
    <Text>
      All you need is a phone or a device to be online.
    </Text>
  </Slide>
);

const Slider3 =({ height }) => (
  <Slide
    variants={slideVariants}
    initial="preStart"
    animate="start"
    exit="exit"
  >
    <FriendsTalking height={height} />
    <Title level={2} margin="8px 0">With friends.</Title>
    <Text>
      Everything is funnier with friends, experience new things together.
    </Text>
  </Slide>
);

const Slider: FunctionComponent = () => {
  const layout = useAppLayout();
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let intervalRef;
    if (layout !== Layout.MOBILE) {
      intervalRef = setInterval(() => {
        setActiveSlide((prev) => {
          switch (prev){
            case 1:
              return 2;
            case 2:
              return 3;
            default:
              return 1;
          }
        });
      }, 5000);
    }

    return () => {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
    }
  }, [layout]);

  return (
    <SliderWrapper layout={layout} height={sizeMap[layout]}>
      <AnimatePresence>
        <Switch by={activeSlide}>
          <Case value={1} component={Slider1} height={sizeMap[layout]} />
          <Case value={2} component={Slider2} height={sizeMap[layout]} />
          <Case value={3} component={Slider3} height={sizeMap[layout]} />
        </Switch>
      </AnimatePresence>
    </SliderWrapper>
  );
};

export default Slider;
