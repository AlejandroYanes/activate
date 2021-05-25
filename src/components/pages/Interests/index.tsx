import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FlexBox from 'components/base-components/FlexBox';
import IconButton from 'components/base-components/IconButton';
import { Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import InterestsGrid from 'components/experience/InterestsGrid';
import { StyledCard } from './styled';
import { interests as allInterests } from './interests';
import Page from '../../base-components/Page';
import { Button } from '../../base-components/Button';

const emptyAction = () => undefined;

const InterestsPage: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [interests, setInterests] = useState([]);

  return (
    <Page>
      <StyledCard>
        <FlexBox align="center" mB>
          <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} mR />
          <Title level={2}>Manage your interests</Title>
        </FlexBox>
        <InterestsGrid
          multiple
          value={interests}
          interests={allInterests}
          onChange={setInterests}
        />
        <Button
          onClick={emptyAction}
          label="Update"
          variant="fill"
          margin="24px 0 0 auto"
        />
      </StyledCard>
    </Page>
  );
};

export default InterestsPage;
