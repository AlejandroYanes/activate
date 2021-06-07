import { useQuery } from 'react-query';
import interestsApi from 'api/interests';
import { QueryKey } from 'components/providers/Query';
import { Text } from 'components/base-components/Typography';
import { SpinningDots } from 'components/base-components/Loaders';
import { LinkButton } from 'components/base-components/Button';
import InterestsGrid from 'components/experience/InterestsGrid';

const MyInterests = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_MY_INTERESTS, interestsApi.listMyInterests);

  if (isLoading) {
    return (
      <>
        <Text size="large" color="secondary" mB>Your Interests</Text>
        <SpinningDots margin="24px auto" />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Text size="large" color="secondary" mB>Your Interests</Text>
        <Text padding="6px 0">
          Oops, something went wrong loading your interests.
          Please check your internet connection and try again.
        </Text>
      </>
    );
  }

  return (
    <>
      <Text size="large" color="secondary" mB>Your Interests</Text>
      <InterestsGrid interests={response.data} plain readonly />
      <LinkButton
        to="/app/interests"
        label="Manage"
        margin="24px 0 0 auto"
        color="brand"
        variant="outline"
      />
    </>
  );
}

export default MyInterests;
