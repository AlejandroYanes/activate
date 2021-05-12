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
import { useAppLayout } from '../../providers/Layout';

interface Props extends PositionProps {
  value: string;
  onChange: (value) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const sizeMap = { large: 210, medium: 160, small: 110 };

const PickList: FunctionComponent<Props> = (props) => {
  const { value, onChange, size, color, children, ...rest } = props;
  const layout = useAppLayout();
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
    } else {
      setShowArrows(false);
    }
  }, [layout]);

  return (
    <Wrapper {...rest} data-el="pick_list-wrapper">
      <RenderIf condition={showArrows}>
        <Edge side="left" data-el="pick_list-left_edge">
          <IconButton
            onClick={handleLeftEdgeClick}
            icon={Icons.CHEVRON_LEFT}
            variant="flat"
            buttonColor="font"
          />
        </Edge>
      </RenderIf>
      <ListContainer ref={containerRef} data-el="pick_list-list_container">
        <StyledList ref={listRef}>
          <PickListProvider
            size={size}
            color={color}
            value={value}
            onChange={onChange}
          >
            {children}
          </PickListProvider>
        </StyledList>
      </ListContainer>
      <RenderIf condition={showArrows}>
        <Edge side="right" data-el="pick_list-right_edge">
          <IconButton
            onClick={handleRightEdgeClick}
            icon={Icons.CHEVRON_RIGHT}
            variant="flat"
            buttonColor="font"
          />
        </Edge>
      </RenderIf>

    </Wrapper>
  );
};

PickList.defaultProps = {
  size: 'medium',
  color: 'accent',
};

export default PickList;
