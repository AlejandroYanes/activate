import React, { FunctionComponent } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  showClear?: boolean;
  returnValue?: any;
  onClick: (event) => void;
  style?: any;
}

const ClearButton: FunctionComponent<Props> = (props) => {
  const { colors: Colors } = useAppTheme();
  const { showClear, returnValue, onClick, style } = props;

  if (showClear) {
    const clearInput = (event) => {
      event.stopPropagation();
      onClick(returnValue);
    };

    return (
      <AbsoluteContent style={style} floatRight>
        <IconButton
          onClick={clearInput}
          icon={Icons.CLOSE}
          buttonColor="font"
          color={Colors.FONT}
          size="small"
        />
      </AbsoluteContent>
    );
  }

  return null;
};

ClearButton.defaultProps = {
  returnValue: '',
};

export default ClearButton;
