import { FunctionComponent } from 'react';
import MessageScreen from './Message';

interface Props {
  lines?: string[];
}

const ErrorScreen: FunctionComponent<Props> = (props) => {
  const { lines, children } = props;

  return (
    <MessageScreen
      icon="EXCLAMATION_TRIANGLE"
      color="WARNING"
      title="Oops, sorry about that."
      lines={lines}
    >
      {children}
    </MessageScreen>
  );
};

export default ErrorScreen;
