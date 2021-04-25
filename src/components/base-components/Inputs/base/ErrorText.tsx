import { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { StyledErrorText } from './styled/error-text';

interface Props {
  text: string;
}

const variants = {
  initial: { transform: 'translateY(-10px)', opacity: 0 },
  visible: { transform: 'translateY(0px)', opacity: 1 },
};

const ErrorText: FunctionComponent<Props> = (props) => {
  return (
    <RenderIf condition={!!props.text}>
      <StyledErrorText
        variants={variants}
        initial="initial"
        animate="visible"
        exit="initial"
      >
        {props.text}
      </StyledErrorText>
    </RenderIf>
  );
};

export default ErrorText;
