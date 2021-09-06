import React, { FunctionComponent, useCallback, useState } from 'react';
import { CommentModel } from 'models/comment';
import { getRelativeTime } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import { Paragraph, Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { Button, IconButton } from 'components/base-components/Button';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Comment as StyledComment, Details, Footer, Header } from './styled/comment';

interface Props {
  comment: CommentModel;
}

const emptyAction = () => undefined;

const menuTrigger = ({ toggleMenu }) => (
  <IconButton
    onClick={toggleMenu}
    color="background"
    icon="MORE_VERT"
    variant="flat"
  />
);

const Comment: FunctionComponent<Props> = (props) => {
  const {
    comment: {
      author: {
        avatar,
        name,
      },
      createdOn,
      content,
      response,
    },
  } = props;
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponseSection = useCallback(
    () => setShowResponse(!showResponse),
    [showResponse],
  );

  return (
    <StyledComment>
      <Header>
        <Avatar src={avatar} size="medium" />
        <Details>
          <Text>{name}</Text>
          <Text size="small">{getRelativeTime(createdOn)}</Text>
        </Details>
        <Menu trigger={menuTrigger} align="end">
          <MenuItem label="Go to the user's profile" onClick={emptyAction} />
          <MenuItem label="Report comment" onClick={emptyAction} />
        </Menu>
      </Header>
      <Paragraph mB>
        {content}
      </Paragraph>
      <RenderIf condition={showResponse}>
        <Text mT>Response: </Text>
        <Paragraph mL>
          {response}
        </Paragraph>
      </RenderIf>
      <RenderIf condition={!!response}>
        <Footer>
          <RenderIf condition={!showResponse}>
            <Button
              onClick={toggleResponseSection}
              label="Show Response"
              color="background"
              variant="flat"
              sm
            />
          </RenderIf>
          <RenderIf condition={showResponse}>
            <Button
              onClick={toggleResponseSection}
              label="Hide Response"
              variant="flat"
              color="background"
              sm
            />
          </RenderIf>
        </Footer>
      </RenderIf>
    </StyledComment>
  );
};

export default Comment;
