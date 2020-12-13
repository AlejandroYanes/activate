import React, { FunctionComponent } from 'react';
import PanelSectionsProvider from './PanelSections';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <PanelSectionsProvider>
      {children}
    </PanelSectionsProvider>
  );
};

export default AppProviders;
