import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProviders from 'components/providers';
import AppBody from './AppBody';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <AppProviders>
      <AppBody />
    </AppProviders>
  </BrowserRouter>
);

export default App;
