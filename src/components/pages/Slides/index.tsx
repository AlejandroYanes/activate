import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import img1 from 'assets/images/1fd9e63c7cdf9a09c2c9fc7c31a1682b.jpg';
import img2 from 'assets/images/008d91e90a5311c10ee2b84c10988374.jpg';
import img3 from 'assets/images/23e1ca18852cc8964175e89ca187d633.jpg';
import img4 from 'assets/images/41d0c6da9c54c656991f2da4bb88ca57.jpg';
import img5 from 'assets/images/91f6fcba1bb15027915fa779e94f4457.jpg';
import img6 from 'assets/images/2313c6c31959bf1564d1d097b2ab67e5.jpg';
import img7 from 'assets/images/c1319ac73aa26148197f3967ad65a746.jpg';
import img8 from 'assets/images/69a7ccf39060bc28cfa5b0becf342fcd.jpg';
import img9 from 'assets/images/b87b7e466d5e80add314c500ffda92ee.jpg';

import FlexBox from 'components/base-components/FlexBox';
import Page from 'components/base-components/Page';
import { Grid, Header, Slide } from './styled';

const Slides: FunctionComponent = () => {
  return (
    <Page>
      <Grid>
        <FlexBox width="100%" direction="column" align="stretch">
          <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
            <Header>Discover</Header>
            <Header>new</Header>
            <Header>events</Header>
          </FlexBox>
          <Slide src={img1} alt="event-1" />
          <Slide src={img4} alt="event-2" />
          <Slide src={img7} alt="event-3" />
        </FlexBox>
        <FlexBox width="100%" direction="column" align="stretch">
          <Link to="/app/post">
            <Slide src={img2} alt="event-2" />
          </Link>
          <Slide src={img5} alt="event-1" />
          <Slide src={img8} alt="event-3" />
        </FlexBox>
        <FlexBox width="100%" direction="column" align="stretch">
          <Slide src={img3} alt="event-2" />
          <Slide src={img6} alt="event-3" />
          <Slide src={img9} alt="event-1" />
        </FlexBox>

        {/*<Slide src={img1} alt="event-1" />*/}
        {/*<Slide src={img2} alt="event-2" />*/}
        {/*<Slide src={img3} alt="event-3" />*/}
        {/*<Slide src={img4} alt="event-4" />*/}
        {/*<Slide src={img5} alt="event-5" />*/}
        {/*<Slide src={img6} alt="event-6" />*/}
        {/*<Slide src={img7} alt="event-7" />*/}
        {/*<Slide src={img8} alt="event-8" />*/}
      </Grid>
    </Page>
  );
};

export default Slides;
