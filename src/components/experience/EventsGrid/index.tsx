import { FunctionComponent, useMemo } from 'react';
import { EventModel } from 'models/event';
import FlexBox from 'components/base-components/FlexBox';
import EventTile from 'components/experience/EventTile';
import { Grid } from './styled';

interface Props {
  events: EventModel[];
  cols: number;
  title?: JSX.Element;
}

function getNextColumn(total: number, current: number) {
  if (current < total - 1) {
    return current + 1;
  }
  return 0;
}

function generateBatches(
  events: EventModel[],
  cols: number,
): EventModel[][] {
  const batches = new Array(cols).fill(1).map(() => []);
  let colToInsert = 0;

  return events.reduce((results, event) => {
    results[colToInsert].push(event);
    colToInsert = getNextColumn(cols, colToInsert);
    return results;
  }, batches);
}

const EventsGrid: FunctionComponent<Props> = (props) => {
  const { events, cols, title } = props;

  const batches = useMemo(() => generateBatches(events, cols), [events, cols]);

  const tiles = batches.map(batch => batch.map(event => (
    <EventTile key={event.id} event={event} />
  )));

  if (title) {
    tiles[0].unshift(title);
  }

  const columns = tiles.map((batch, index) => (
    <FlexBox key={index} width="100%" direction="column" align="stretch">
      {batch}
    </FlexBox>
  ));

  return (
    <Grid>
      {columns}
    </Grid>
  );
};

export default EventsGrid;
