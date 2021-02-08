import React, { FunctionComponent } from 'react';
import PanelSectionsProvider from './PanelSections';
import ThemeProvider from './Theme';
import LayoutProvider from './Layout';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <LayoutProvider>
      <ThemeProvider>
        <PanelSectionsProvider>
          {children}
        </PanelSectionsProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
};

export default AppProviders;
