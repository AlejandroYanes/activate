import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { parseSearchQuery } from 'helpers';
import Page from 'components/base-components/Page';
import { Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import RenderByMap from 'components/base-components/RenderByMap';
import FlexBox from 'components/base-components/FlexBox';
import SearchInput from './SearchInput';
import EventsResults from './EventsResults';
import PublishersResults from './PublishersResults';
import UsersResults from './UsersResults';
import { SearchParam, SearchType } from './types';

const resultPageMap = {
  [SearchType.EVENTS]: EventsResults,
  [SearchType.PUBLISHERS]: PublishersResults,
  [SearchType.USERS]: UsersResults,
};

const SearchPage: FunctionComponent = () => {
  const { location: { search } } = useHistory();
  const { term, type } = parseSearchQuery<SearchParam>(search);

  return (
    <Page>
      <FlexBox direction="column" align="stretch" margin="0 auto">
        <Title level={1} color="brand" weight="bold" padding="0 24px">
          Search for anything
        </Title>
        <SearchInput />
      </FlexBox>
      <RenderIf condition={!!term}>
        <RenderByMap map={resultPageMap} option={type} search={search} />
      </RenderIf>
    </Page>
  );
};

export default SearchPage;
