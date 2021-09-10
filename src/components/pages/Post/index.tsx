import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { addMonths } from 'date-fns';
import img2 from 'assets/images/008d91e90a5311c10ee2b84c10988374.jpg';
import Page from '../../base-components/Page';
import FlexBox from '../../base-components/FlexBox';
import { Slide } from '../Slides/styled';
import { Text, Title } from '../../base-components/Typography';
import Description from '../EventDetails/Description';
import { IconButton } from '../../base-components/Button';
import Avatar from '../../base-components/Avatar';
import useEventState, { Tabs } from '../EventDetails/state';
import { Tab, Tabset } from '../../base-components/Tabset';
import { Modals } from '../../modals';

const fakeEvent: any = {
  date: addMonths(new Date(), 5),
  address: '176 Gutkowski Centers Suite 630',
  followersCount: 3456,
  friends: [],
};

const PostPage: FunctionComponent = () => {
  const { goBack, push } = useHistory();
  const {
    state: {
      event,
      activeTab,
      isBooked,
    },
    actions: {
      setActiveTab,
      handleBookmark,
    },
  } = useEventState();

  const inviteUsers = useCallback(() => {
    const { id, name } = event;
    push(Modals.INVITE, { event: { id, name } });
  }, [event]);

  return (
    <Page>
      <FlexBox direction="row-reverse" width="100%">
        <FlexBox width="40%">
          <Slide src={img2} alt="event-2" />
        </FlexBox>
        <FlexBox
          direction="column"
          align="stretch"
          padding="0 32px"
          grow
        >
          <FlexBox margin="0 0 48px 0">
            <IconButton onClick={goBack} icon="ARROW_LEFT" margin="12px 0 0 0" />
            <Title level={1} mL>
              20th Annual convention for Old Cars Lovers
            </Title>
          </FlexBox>
          <FlexBox align="center" margin="8px 0">
            <FlexBox align="center">
              <Avatar src="user3" />
              <FlexBox direction="column" padding="0 0 0 6px">
                <Text size="small" color="secondary">@alejandro.yanes</Text>
                <Text padding="4px 0 0 0">Alejandro Yanes</Text>
              </FlexBox>
            </FlexBox>
            <IconButton
              size="large"
              variant="flat"
              margin="0 0 0 auto"
              onClick={handleBookmark}
              color={isBooked ? 'accent' : 'background'}
              icon={isBooked ? 'BOOKMARK_FILLED' : 'BOOKMARK'}
            />
            <IconButton
              onClick={inviteUsers}
              icon="FORWARD"
              color="background"
              variant="flat"
              size="large"
            />
            <IconButton
              onClick={() => undefined}
              icon="MORE_VERT"
              color="background"
              variant="flat"
              size="large"
            />
          </FlexBox>
          <Tabset
            activeTab={activeTab}
            onTabChange={setActiveTab}
            fullWidth
            mT
            mB
          >
            <Tab name={Tabs.Details} label="Details" icon="FORM" />
            <Tab name={Tabs.Comments} label="Comments" icon="COMMENTS" />
          </Tabset>
          <Description event={fakeEvent} />
        </FlexBox>
      </FlexBox>
    </Page>
  );
};

export default PostPage;
