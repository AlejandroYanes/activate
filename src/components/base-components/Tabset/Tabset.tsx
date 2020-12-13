import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { TabSetProvider } from './context';
import { StyledTabset } from './styled';

export interface TabsetProps extends PositionProps {
  fullWidth?: boolean;
  compact?: boolean;
  activeTab: string;
  onTabChange: (activeTab) => void;
}

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const { children, mT, mR, mB, mL, ...rest } = props;

  return (
    <StyledTabset mB={mB} mT={mT} mR={mR} mL={mL}>
      <TabSetProvider {...rest}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </TabSetProvider>
    </StyledTabset>
  );
};

export default Tabset;
