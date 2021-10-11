import React, { FunctionComponent } from 'react';
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
      color={isBooked ? 'accent' : 'background'}
      icon={isBooked ? 'BOOKMARK_FILLED' : 'BOOKMARK'}
      onClick={onClick}
    />
  );
};

export default BookmarkButton;
