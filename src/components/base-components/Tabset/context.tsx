import React, { createContext, useMemo, FunctionComponent } from 'react';
import { TabsetProps } from 'components/base-components/Tabset/Tabset';

interface TabsetContext extends TabsetProps {
  animateEntrance?: boolean;
  disableFocus?: boolean;
}

const tabsetContext = createContext<TabsetContext>(undefined);
const { Provider } = tabsetContext;

export const TabSetProvider: FunctionComponent<TabsetContext> = (props) => {
  const { children, ...rest } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({ ...rest }), Object.values(rest));

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default tabsetContext;
