import { FunctionComponent } from 'react';
import { Colors } from 'styles/colors';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';

interface Props {
  icon: Icons;
  color: Colors;
  title: string;
  lines?: string[];
}

const MessageScreen: FunctionComponent<Props> = (props) => {
  const { icon, color, title, lines, children } = props;

  const textLines = lines.map(line => (
    <Text key={line} align="center">{line}</Text>
  ));

  return (
    <FlexBox direction="column" align="center">
      <SvgIcon
        icon={icon}
        color={color}
        size="page"
      />
      <Text padding="12px 0" size="large">{title}</Text>
      {textLines}
      {children}
    </FlexBox>
  );
};

export default MessageScreen;
