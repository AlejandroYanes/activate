import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import RenderIf from 'components/base-components/RenderIf';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Days from './Days';
import { Edge, List, ListContainer, Wrapper } from './styled';

interface Props extends PositionProps {
  days: Date[];
  value: Date;
  onChange: (date: Date) => void;
}

const DayCalendar: FunctionComponent<Props> = (props) => {
  const { days, value, onChange, ...rest } = props;
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(undefined);
  const listRef = useRef(undefined);

  const handleLeftEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(-48, 0);
  }, []);

  const handleRightEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(48, 0);
  }, []);

  const handleDayClick = useCallback((event) => {
    const { day } = event.target.dataset;
    onChange(new Date(day));
  }, [onChange]);

  useEffect(() => {
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const listWidth = listRef.current.getBoundingClientRect().width;

    if (listWidth > containerWidth) {
      setShowArrows(true);
    }
  }, []);

  return (
    <Wrapper {...rest} data-el="day-calendar-wrapper">
      <Edge side="left" data-el="day-calendar-left-edge">
        <RenderIf condition={showArrows}>
          <IconButton
            onClick={handleLeftEdgeClick}
            icon={Icons.CHEVRON_LEFT}
            variant="flat"
            buttonColor="font"
          />
        </RenderIf>
      </Edge>
      <ListContainer ref={containerRef} data-el="day-calendar-list-container">
        <List ref={listRef}>
          <AnimateSharedLayout>
            <Days days={days} value={value} handleDayClick={handleDayClick} />
          </AnimateSharedLayout>
        </List>
      </ListContainer>
      <Edge side="right" data-el="day-calendar-right-edge">
        <RenderIf condition={showArrows}>
          <IconButton
            onClick={handleRightEdgeClick}
            icon={Icons.CHEVRON_RIGHT}
            variant="flat"
            buttonColor="font"
          />
        </RenderIf>
      </Edge>
    </Wrapper>
  );
};

export default DayCalendar;
