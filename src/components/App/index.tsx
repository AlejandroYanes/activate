import React, { FunctionComponent } from 'react';
import AppProviders from 'components/providers';
import Routes from 'components/routes';

const App: FunctionComponent = () => (
  <AppProviders>
    <Routes />
  </AppProviders>
);

export default App;
