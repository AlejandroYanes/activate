import { useQuery } from 'react-query';
import interestsApi from 'api/interests';
import { QueryKey } from 'components/providers/Query';
import { Text } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import InterestsGrid from 'components/experience/InterestsGrid';
import RenderIf from 'components/base-components/RenderIf';

const MyInterests = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_INTERESTS, interestsApi.listMyInterests);

  return (
    <>
      <Text size="large" color="secondary" mB>Your Interests</Text>
      <InterestsGrid
        interests={response?.data}
        loading={isLoading}
        errored={!!error}
        readonly
        plain
      />
      <RenderIf condition={!isLoading && !error}>
        <LinkButton
          to="/app/interests"
          label="Manage"
          margin="24px 0 0 auto"
          color="brand"
          variant="outline"
        />
      </RenderIf>
    </>
  );
}

export default MyInterests;
