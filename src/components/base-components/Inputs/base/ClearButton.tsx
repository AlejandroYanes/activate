import React, { FunctionComponent } from 'react';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';

interface Props {
  isFocused?: boolean;
  showClear?: boolean;
  onChange: (event) => void;
}

const ClearButton: FunctionComponent<Props> = (props) => {
  const { showClear, isFocused, onChange } = props;

  if (showClear) {
    const clearInput = () => {
      onChange({ target: { value: '' } });
    };

    return (
      <IconButton
        onClick={clearInput}
        icon={Icons.CLOSE}
        buttonColor={isFocused ? 'brand' : 'dark'}
        size="small"
      />
    );
  }

  return null;
};

export default ClearButton;
