import { createContext, useContext } from 'react';

const context = createContext(undefined);
const { Provider } = context;

export const PublisherProvider = ({ children, publisher }) => (
  <Provider value={publisher}>
    {children}
  </Provider>
);

export const usePublisherId = () => useContext(context);
