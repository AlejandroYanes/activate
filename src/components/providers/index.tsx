import React, { FunctionComponent } from 'react';
import PanelSectionsProvider from './PanelSections';
import ThemeProvider from './Theme';
import LayoutProvider from './Layout';
import AuthProvider from './Auth';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <LayoutProvider>
      <ThemeProvider>
        <PanelSectionsProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </PanelSectionsProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
};

export default AppProviders;
