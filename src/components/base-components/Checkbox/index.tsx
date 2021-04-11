import React, { FunctionComponent, useCallback } from 'react';
import { PositionProps } from 'helpers';
import { useUniqueIds } from 'hooks/UI';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import Faux from './Faux';

interface Props extends PositionProps {
  id?: string;
  name?: string;
  label?: string;
  value: boolean;
  onChange?: (event) => void;
  disabled?: boolean;
}

const inputStyles = { display: 'none' };

const Checkbox: FunctionComponent<Props> = (props) => {
  const { id, name, label, value, onChange, disabled, ...rest } = props;
  const [inputName] = useUniqueIds([name || id || 'input']);

  const handleFauxClick = useCallback(() => {
    if (onChange && !disabled) {
      onChange(!value);
    }
  }, [value, onChange]);

  return (
    <FlexBox align="center" {...rest}>
      <Faux isChecked={value} onClick={handleFauxClick} />
      <RenderIf condition={!!label}>
        <Text padding="0 0 0 6px">{label}</Text>
      </RenderIf>
      <input
        type="checkbox"
        id={id}
        name={inputName}
        value={inputName}
        checked={value}
        style={inputStyles}
        readOnly
      />
    </FlexBox>
  );
};

export default Checkbox;
