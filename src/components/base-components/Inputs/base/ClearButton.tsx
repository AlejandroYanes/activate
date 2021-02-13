import React, { FunctionComponent } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  isFocused?: boolean;
  showClear?: boolean;
  onClick: (event) => void;
  style?: any;
}

const ClearButton: FunctionComponent<Props> = (props) => {
  const { colors: Colors, useDarkStyle } = useAppTheme();
  const { showClear, isFocused, onClick, style } = props;

  if (showClear) {
    const clearInput = () => {
      onClick({ target: { value: '' } });
    };

    const focusedColor = useDarkStyle ? Colors.BRAND : Colors.BRAND_DARK;

    return (
      <AbsoluteContent style={style} floatRight>
        <IconButton
          onClick={clearInput}
          icon={Icons.CLOSE}
          buttonColor={isFocused ? 'brand' : 'font'}
          color={isFocused ? focusedColor : Colors.FONT}
          size="small"
        />
      </AbsoluteContent>
    );
  }

  return null;
};

export default ClearButton;
