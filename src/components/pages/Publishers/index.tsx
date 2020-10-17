import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { AuxPanelSections, usePanelActions } from 'components/providers/PanelSections';
import { StyledPublishers } from './styled';
import { publishers } from './publishers';
import Publisher from './Publisher';

const mapPublishers = () => publishers.map((p) => <Publisher key={p.id} {...p} />);

const PublishersPage: FunctionComponent = () => {
  const publisherCards = useMemo(mapPublishers, []);
  const { setPageSections } = usePanelActions();

  useEffect(() => {
    setPageSections([AuxPanelSections.Search]);
  }, []);

  return (
    <StyledPublishers>
      {publisherCards}
    </StyledPublishers>
  );
};

export default PublishersPage;
