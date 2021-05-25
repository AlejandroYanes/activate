import React, { FunctionComponent } from 'react';
import PanelSectionsProvider from './PanelSections';
import ThemeProvider from './Theme';
import LayoutProvider from './Layout';
import AuthProvider from './Auth';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <AuthProvider>
      <LayoutProvider>
        <ThemeProvider>
          <PanelSectionsProvider>
            {children}
          </PanelSectionsProvider>
        </ThemeProvider>
      </LayoutProvider>
    </AuthProvider>
  );
};

export default AppProviders;
