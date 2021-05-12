import { FunctionComponent } from 'react';
import { Container, Guide, StyledStep } from './styled/step';
import RenderIf from '../RenderIf';

interface Props {
  value: number;
  onClick?: (step) => void;
  isActive?: boolean;
  hideStart?: boolean;
  hideEnd?: boolean;
}

const Step: FunctionComponent<Props> = (props) => {
  const { value, onClick, isActive, hideStart, hideEnd } = props;

  const handleOnClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <>
      <RenderIf condition={!hideStart}>
        <Guide isActive={isActive} />
      </RenderIf>
      <Container isActive={isActive} onClick={handleOnClick}>
        <StyledStep isActive={isActive}>{value + 1}</StyledStep>
      </Container>
      <RenderIf condition={!hideEnd}>
        <Guide isActive={isActive} />
      </RenderIf>
    </>
  );
};

export default Step;
