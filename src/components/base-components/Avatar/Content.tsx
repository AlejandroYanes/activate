import { FunctionComponent, useState, memo } from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import User1 from './users/User1';
import User2 from './users/User2';
import User3 from './users/User3';
import User4 from './users/User4';
import User5 from './users/User5';
import User6 from './users/User6';
import User7 from './users/User7';
import User8 from './users/User8';
import User9 from './users/User9';
import User10 from './users/User10';
import User11 from './users/User11';
import User12 from './users/User12';

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
  user5: User5,
  user6: User6,
  user7: User7,
  user8: User8,
  user9: User9,
  user10: User10,
  user11: User11,
  user12: User12,
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
