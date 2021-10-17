import React, { FunctionComponent, useCallback, useState } from 'react';
import {
  Avatar,
  Button,
  FlexBox,
  IconButton,
  Menu,
  MenuItem,
  MenuLink,
  Paragraph,
  RenderIf,
  Text,
  Title,
  getRelativeTime,
} from 'activate-components';
import { CommentModel } from 'models/comment';
import { useAuthData } from 'components/providers/Auth';
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
        id,
        name,
        avatar,
      },
      createdOn,
      content,
      response,
    },
  } = props;
  const { userInfo: { sub } } = useAuthData();
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponseSection = useCallback(
    () => setShowResponse(!showResponse),
    [showResponse],
  );

  const isMyComment = sub === id;

  return (
    <StyledComment>
      <Header>
        <Avatar src={avatar} size="medium" />
        <Details>
          <Text>{isMyComment ? 'Me' : name}</Text>
          <Text size="small">{getRelativeTime(createdOn)}</Text>
        </Details>
        <Menu trigger={menuTrigger}>
          <FlexBox height={40} justify="center" align="center">
            <Title level={3} weight="light">{isMyComment ? 'Me' : name}</Title>
          </FlexBox>
          <RenderIf condition={!isMyComment}>
            <MenuLink label="Go to profile" to={`/app/user/${id}`} />
            <MenuItem danger label="Report comment" onClick={emptyAction} />
          </RenderIf>
          <RenderIf condition={isMyComment}>
            <MenuItem label="Edit" onClick={emptyAction} />
            <MenuItem danger label="Delete" onClick={emptyAction} />
          </RenderIf>
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
