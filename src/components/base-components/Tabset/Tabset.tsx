import React, { FunctionComponent, useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { TabSetProvider } from './context';
import { StyledTabset } from './styled';

export interface TabsetProps extends PositionProps {
  compact?: boolean;
  activeTab: string;
  onTabChange: (activeTab) => void;
}

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const layout = useAppLayout();
  const { children, mT, mR, mB, mL, ...rest } = props;
  const [animateEntrance, setAnimateEntrance] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateEntrance(true), 100);
  }, []);

  return (
    <AnimateSharedLayout type="crossfade">
      <StyledTabset mB={mB} mT={mT} mR={mR} mL={mL}>
        <TabSetProvider
          {...rest}
          animateEntrance={animateEntrance}
          // disableFocus={layout !== Layout.FULL}
        >
          {children}
        </TabSetProvider>
      </StyledTabset>
    </AnimateSharedLayout>
  );
};

export default Tabset;
