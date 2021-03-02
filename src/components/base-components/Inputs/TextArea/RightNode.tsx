import React, { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import ClearButton from '../base/ClearButton';
import AbsoluteContent from '../base/AbsoluteContent';

interface Props {
  showClear?: boolean;
  value?: string;
  onChange?: (event) => void;
  maxLength?: number;
}

const RightNode: FunctionComponent<Props> = (props) => {
  const { showClear, value, onChange, maxLength } = props;

  if (showClear) {
    return (
      <AbsoluteContent floatRight>
        <ClearButton
          showClear={showClear && !!value}
          onClick={onChange}
        />
      </AbsoluteContent>
    );
  }

  if (maxLength && value) {
    return (
      <AbsoluteContent floatRight>
        <Text size="small" color="secondary">{maxLength - value.length}</Text>
      </AbsoluteContent>
    );
  }

  return null;
};

export default RightNode;
