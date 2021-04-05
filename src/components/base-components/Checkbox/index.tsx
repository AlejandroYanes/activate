import React, { FunctionComponent, useCallback } from 'react';
import { PositionProps } from 'helpers';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import Faux from './Faux';

interface Props extends PositionProps {
  label?: string;
  value: boolean;
  onChange?: (event) => void;
}

const Checkbox: FunctionComponent<Props> = (props) => {
  const { label, value, onChange, ...rest } = props;

  const handleFauxClick = useCallback(() => {
    if (onChange) {
      onChange({ checked: !value });
    }
  }, [value, onChange]);

  return (
    <FlexBox align="center" {...rest}>
      <Faux isChecked={value} onClick={handleFauxClick} />
      <RenderIf condition={!!label}>
        <Text padding="0 0 0 6px">{label}</Text>
      </RenderIf>
    </FlexBox>
  );
};

export default Checkbox;
