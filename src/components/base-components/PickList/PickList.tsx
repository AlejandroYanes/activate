import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PositionProps } from 'helpers';
import { PickListProvider } from './context';
import { Wrapper, ListContainer, Edge, StyledList } from './styled';
import IconButton from '../IconButton';
import { Icons } from '../SvgIcon';
import RenderIf from '../RenderIf';

interface Props extends PositionProps {
  value: string;
  onChange: (value) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const sizeMap = { large: 210, medium: 160, small: 110 };

const PickList: FunctionComponent<Props> = (props) => {
  const { value, onChange, size, color, children, ...rest } = props;
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(undefined);
  const listRef = useRef(undefined);

  const handleLeftEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(-sizeMap[size], 0);
  }, [size]);

  const handleRightEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(sizeMap[size], 0);
  }, [size]);

  useEffect(() => {
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const listWidth = listRef.current.getBoundingClientRect().width;

    if (listWidth > containerWidth) {
      setShowArrows(true);
    }
  }, []);

  return (
    <Wrapper {...rest} data-el="pick_list-wrapper">
      <Edge side="left" data-el="pick_list-left_edge">
        <RenderIf condition={showArrows}>
          <IconButton
            onClick={handleLeftEdgeClick}
            icon={Icons.CHEVRON_LEFT}
            variant="flat"
            buttonColor="font"
          />
        </RenderIf>
      </Edge>
      <ListContainer ref={containerRef} data-el="pick_list-list_container">
        <StyledList ref={listRef}>
          <PickListProvider value={value} onChange={onChange} size={size} color={color}>
            {children}
          </PickListProvider>
        </StyledList>
      </ListContainer>
      <Edge side="right" data-el="pick_list-right_edge">
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

PickList.defaultProps = {
  size: 'medium',
  color: 'accent',
};

export default PickList;
