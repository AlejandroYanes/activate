import React, { FunctionComponent } from 'react';
import PanelSectionsProvider from './PanelSections';
import ThemeProvider from './Theme';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <PanelSectionsProvider>
        {children}
      </PanelSectionsProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
