import { FunctionComponent, useState, memo } from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import User1 from './users/User1';
import User2 from './users/User2';
import User3 from './users/User3';
import User4 from './users/User4';

interface Props {
  url?: string;
  alt?: string;
  icon?: string;
}

const users = {
  user1: User1,
  user2: User2,
  user3: User3,
  user4: User4,
};

const Content: FunctionComponent<Props> = (props) => {
  const { url, alt, icon } = props;
  const [imageFailed, setImageFailed] = useState(false);

  const handleOnError = () => {
    setImageFailed(true);
  };

  if (url && !imageFailed) {
    return (
      <img src={url} alt={alt} onError={handleOnError} />
    );
  }

  if (icon) {
    const SelectedUser = users[icon];
    return <SelectedUser />;
  }

  return <SvgIcon icon={Icons.USER} />;
};

export default memo(Content);
