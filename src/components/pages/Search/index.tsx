import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { parseSearchQuery } from 'helpers';
import Page from 'components/base-components/Page';
import RenderIf from 'components/base-components/RenderIf';
import RenderByMap from 'components/base-components/RenderByMap';
import FlexBox from 'components/base-components/FlexBox';
import PageTitle from './PageTitle';
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
        <PageTitle />
        <SearchInput />
      </FlexBox>
      <RenderIf condition={!!term}>
        <RenderByMap map={resultPageMap} option={type} search={search} />
      </RenderIf>
    </Page>
  );
};

export default SearchPage;
