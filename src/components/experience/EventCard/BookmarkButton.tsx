import React, { FunctionComponent } from 'react';
import { Icons } from 'components/base-components/SvgIcon';
import { IconButton } from 'components/base-components/Button';

interface Props {
  isBooked: boolean;
  onClick: (event) => void;
}

const BookmarkButton: FunctionComponent<Props> = (props) => {
  const { isBooked, onClick } = props;

  return (
    <IconButton
      size="large"
      variant="flat"
      color="accent"
      icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.BOOKMARK}
      onClick={onClick}
    />
  );
};

export default BookmarkButton;
