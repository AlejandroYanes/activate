import { FunctionComponent, ReactNode } from 'react';
import { FlexBox, Layout, useAppLayout } from 'activate-components';
import { EventModel } from 'models/event';
import EventTile from 'components/experience/EventTile';
import { Grid } from './styled';

type Item = EventModel | ReactNode;

interface Props {
  events: Item[];
  title?: JSX.Element;
}

const colsMap = {
  [Layout.DESKTOP]: 3,
  [Layout.TABLET]: 2,
  [Layout.MOBILE]: 1,
};

function getNextColumn(total: number, current: number) {
  if (current < total - 1) {
    return current + 1;
  }
  return 0;
}

function isEvent(item: Event | ReactNode): item is EventModel {
  return !!(item as EventModel).id && !!(item as EventModel).image;
}

function generateBatches(
  events: Item[],
  cols: number,
): Item[][] {
  const batches = new Array(cols).fill(1).map(() => []);
  let colToInsert = 0;

  return events.reduce((results, event) => {
    results[colToInsert].push(event);
    colToInsert = getNextColumn(cols, colToInsert);
    return results;
  }, batches as any);
}

const EventsGrid: FunctionComponent<Props> = (props) => {
  const { events, title } = props;
  const layout = useAppLayout();
  const cols = colsMap[layout];

  const batches = generateBatches(events, cols);

  const tiles = batches.map(batch => batch.map((item) => {
    return isEvent(item)
      ? <EventTile key={item.id} event={item} />
      : item
  }));

  if (title) {
    tiles[0].unshift(title);
  }

  const children = tiles.map((batch, index) => (
    <FlexBox key={index} width="100%" direction="column" align="stretch">
      {batch}
    </FlexBox>
  ));

  return (
    <Grid cols={cols}>
      {children}
    </Grid>
  );
};

export default EventsGrid;
