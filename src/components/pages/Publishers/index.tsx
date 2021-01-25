import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { StyledPublishers } from './styled';
import { publishers } from './publishers';
import Publisher from './Publisher';

const mapPublishers = () => publishers.map((p) => <Publisher key={p.id} {...p} />);

const PublishersPage: FunctionComponent = () => {
  const publisherCards = useMemo(mapPublishers, []);
  const { addSection, removeSection } = usePanelActions();

  useEffect(() => {
    addSection(AuxPanelSection.Search);

    return () => removeSection(AuxPanelSection.Search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPublishers>
      {publisherCards}
    </StyledPublishers>
  );
};

export default PublishersPage;
