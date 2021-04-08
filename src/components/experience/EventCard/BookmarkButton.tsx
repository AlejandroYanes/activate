import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';

interface Props {
  isBooked: boolean;
  onClick: (event) => void;
}

const BookmarkButton: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { isBooked, onClick } = props;

  return (
    <IconButton
      size="large"
      variant="flat"
      buttonColor="accent"
      color={colors.ACCENT}
      secondaryColor={isBooked ? colors.ACCENT : 'transparent'}
      icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.ADD_BOOKMARK}
      onClick={onClick}
    />
  );
};

export default BookmarkButton;
