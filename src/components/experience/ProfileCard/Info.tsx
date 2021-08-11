import React, { FunctionComponent } from 'react';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import { Attr, Info as StyledInfo } from './styled';

interface Props {
  name: string;
  userName: string;
  leftStatLabel: string;
  leftStatValue: number;
  rightStatLabel: string;
  rightStatValue: number;
}

const Info: FunctionComponent<Props> = (props) => {
  const {
    leftStatLabel,
    leftStatValue,
    userName,
    name,
    rightStatLabel,
    rightStatValue,
  } = props;

  return (
    <StyledInfo>
      <Attr>
        <Text>{leftStatLabel}</Text>
        <Title weight="light" level={2} color="accent">
          {formatAmount(leftStatValue)}
        </Title>
      </Attr>
      <Attr>
        <Text>{`@${userName}`}</Text>
        <Title weight="light" level={2} align="center" color="brand">{name}</Title>
      </Attr>
      <Attr>
        <Text>{rightStatLabel}</Text>
        <Title weight="light" level={2} color="accent">
          {formatAmount(rightStatValue)}
        </Title>
      </Attr>
    </StyledInfo>
  );
};

export default Info;
