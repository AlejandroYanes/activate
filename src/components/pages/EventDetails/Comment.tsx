import React, { FunctionComponent, useCallback, useState } from 'react';
import { formatDate } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import { Paragraph, Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import Button from 'components/base-components/Button';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Comment as StyledComment, Details, Footer, Header } from './styled/comment';

interface Props {
  author: { img: string; name: string };
  date: Date;
  content: string;
  response: string;
}

const emptyAction = () => undefined;

const menuTrigger = ({ toggleMenu }) => (
  <IconButton
    onClick={toggleMenu}
    icon={Icons.MORE_VERT}
    buttonColor="font"
    variant="flat"
  />
);

const Comment: FunctionComponent<Props> = (props) => {
  const { author: { img, name }, date, content, response } = props;
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponseSection = useCallback(
    () => setShowResponse(!showResponse),
    [showResponse],
  );

  return (
    <StyledComment>
      <Header>
        <Avatar src={img} size="medium" />
        <Details>
          <Text>{name}</Text>
          <Text size="small">{formatDate(date)}</Text>
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
              variant="flat"
              color="font"
              sm
            />
          </RenderIf>
          <RenderIf condition={showResponse}>
            <Button
              onClick={toggleResponseSection}
              label="Hide Response"
              variant="flat"
              color="font"
              sm
            />
          </RenderIf>
        </Footer>
      </RenderIf>
    </StyledComment>
  );
};

export default Comment;
