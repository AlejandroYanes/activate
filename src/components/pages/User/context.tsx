import { createContext, useContext } from 'react';

const context = createContext(undefined);
const { Provider } = context;

export const ConsumerProvider = ({ children, consumer }) => (
  <Provider value={consumer}>
    {children}
  </Provider>
);

export const useConsumerId = () => useContext(context);
