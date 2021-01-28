import React, { FunctionComponent, useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { TabSetProvider } from './context';
import { StyledTabset } from './styled';

export interface TabsetProps extends PositionProps {
  fullWidth?: boolean;
  compact?: boolean;
  activeTab: string;
  onTabChange: (activeTab: string) => void;
}

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const { children, mT, mR, mB, mL, ...rest } = props;
  const [animateEntrance, setAnimateEntrance] = useState(false);

  useEffect(() => {
    setAnimateEntrance(true);
    setTimeout(() => setAnimateEntrance(true), 100);
  }, []);

  return (
    <StyledTabset mB={mB} mT={mT} mR={mR} mL={mL}>
      <TabSetProvider {...rest} animateEntrance={animateEntrance}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </TabSetProvider>
    </StyledTabset>
  );
};

export default Tabset;
