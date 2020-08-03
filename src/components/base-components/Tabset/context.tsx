import React, { createContext, useMemo, FunctionComponent } from 'react';
import { TabsetProps } from 'components/base-components/Tabset/Tabset';

const tabsetContext = createContext(undefined);
const { Provider } = tabsetContext;

export const TabSetProvider: FunctionComponent<TabsetProps> = (props) => {
  const { activeTab, onTabChange, fullWidth, children } = props;
  const context = useMemo(
    () => ({ activeTab, onTabChange, fullWidth }),
    [activeTab, onTabChange, fullWidth],
  );

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default tabsetContext;
