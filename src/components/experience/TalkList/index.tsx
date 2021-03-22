import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import Talk from './Talk';
import { Action, Panel } from './styled/panel';

interface Props {
  asContactList?: boolean;
  openTalk?: (user) => void;
  openContactList?: () => void;
}

const talks = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    image: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    txt: faker.lorem.words(10),
    active: faker.random.boolean(),
  }));

const TalksList: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { pathname } = useLocation();

  const { asContactList, openTalk, openContactList } = props;

  const handleClick = useCallback((event) => {
    const { id } = event.target.dataset;
    const user = talks.find((t) => t.id === id);
    openTalk(user);

  }, [openTalk, pathname]);

  const talksElements = useMemo(() => (
    talks.map((talk) => (
      <Talk
        key={talk.id}
        {...talk}
        txt={!asContactList ? talk.txt : undefined}
        onClick={handleClick}
      />
    ))
  ), [handleClick, asContactList]);

  return (
    <Panel>
      {talksElements}
      <RenderIf condition={!asContactList}>
        <Action>
          <IconButton
            onClick={openContactList}
            icon={Icons.ADD_USER}
            color={colors.WHITE}
            buttonColor="accent"
            variant="fill"
            size="large"
          />
        </Action>
      </RenderIf>
    </Panel>
  );
};

export default TalksList;
