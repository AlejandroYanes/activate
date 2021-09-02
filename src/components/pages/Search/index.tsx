import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { parseSearchQuery } from 'helpers';
import Page from 'components/base-components/Page';
import { Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { ManInSearch } from 'components/base-components/Illustrations';
import RenderByMap from 'components/base-components/RenderByMap';
import SearchInput from './SearchInput';
import EventsResults from './EventsResults';
import PublishersResults from './PublishersResults';
import UsersResults from './UsersResults';
import { SearchParam, SearchType } from './types';

const emptyState = (
  <ManInSearch margin="-32px 0 0 0" />
);

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
      <Title level={1} color="brand" weight="normal">
        Search for anything
      </Title>
      <SearchInput />
      <RenderIf condition={!!term} fallback={emptyState}>
        <RenderByMap map={resultPageMap} option={type} search={search} />
      </RenderIf>
    </Page>
  );
};

export default SearchPage;
