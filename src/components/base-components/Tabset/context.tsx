import React, { createContext, useMemo, FunctionComponent } from 'react';
import { TabsetProps } from 'components/base-components/Tabset/Tabset';

const tabsetContext = createContext<TabsetProps>(undefined);
const { Provider } = tabsetContext;

export const TabSetProvider: FunctionComponent<TabsetProps> = (props) => {
  const { children, ...rest } = props;
  const context = useMemo(() => ({ ...rest }), Object.values(rest));

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default tabsetContext;
