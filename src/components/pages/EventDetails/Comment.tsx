import React, { FunctionComponent } from 'react';
import { formatDate } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import { Paragraph, Text } from 'components/base-components/Typography';
import { Comment as StyledComment, Details, Header } from './styled/comment';
import IconButton from '../../base-components/IconButton';
import { Icons } from '../../base-components/SvgIcon';

interface Props {
  author: { img: string; name: string };
  date: Date;
  content: string;
}

const Comment: FunctionComponent<Props> = (props) => {
  const { author: { img, name }, date, content } = props;

  return (
    <StyledComment>
      <Header>
        <Avatar icon={img} size="medium" />
        <Details>
          <Text>{name}</Text>
          <Text size="small">{formatDate(date)}</Text>
        </Details>
        <IconButton
          onClick={() => undefined}
          icon={Icons.MORE_VERT}
          buttonColor="font"
          variant="flat"
        />
      </Header>
      <Paragraph>
        {content}
      </Paragraph>
    </StyledComment>
  );
};

export default Comment;
