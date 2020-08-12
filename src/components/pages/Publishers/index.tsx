import React, { FunctionComponent, useMemo } from 'react';
import { StyledPublishers } from './styled';
import { publishers } from './publishers';
import Publisher from './Publisher';

const PublishersPage: FunctionComponent = () => {
  const publisherCards = useMemo(() => publishers.map((p) => <Publisher key={p.id} {...p} />), []);

  return (
    <StyledPublishers>
      {publisherCards}
    </StyledPublishers>
  );
};

export default PublishersPage;
