import { FunctionComponent } from 'react';
import { Colors } from 'styles/colors';
import { PositionProps } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';

interface Props extends PositionProps {
  icon: Icons;
  color: Colors;
  title: string;
  lines?: string[];
}

const MessageScreen: FunctionComponent<Props> = (props) => {
  const { icon, color, title, lines, children, ...rest } = props;

  const textLines = lines
    ? lines.map(line => (
      <Text key={line} align="center">{line}</Text>
    ))
    : null;

  return (
    <FlexBox direction="column" align="center" {...rest}>
      <SvgIcon
        icon={icon}
        color={color}
        size="page"
      />
      <Title level={3} margin="24px 0 8px">{title}</Title>
      {textLines}
      {children}
    </FlexBox>
  );
};

export default MessageScreen;
