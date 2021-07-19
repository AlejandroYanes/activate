import { FunctionComponent } from 'react';
import { Button } from 'components/base-components/Button';
import { Container } from './styled';

const Organizers: FunctionComponent = () => {
  return (
    <Container>
      <Button
        variant="fill"
        onClick={() => undefined}
        leftIcon="FILTER"
        label="Filters"
      />
      <Button
        variant="fill"
        onClick={() => undefined}
        leftIcon="SORT"
        label="Sort By"
      />
    </Container>
  );
};

export default Organizers;
