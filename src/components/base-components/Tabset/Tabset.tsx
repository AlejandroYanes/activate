import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'components/_base';
import { TabSetProvider } from './context';
import { StyledTabset } from './styled';

export interface TabsetProps extends PositionProps {
  fullWidth?: boolean;
  activeTab: string;
  onTabChange: (activeTab) => void;
  backgroundColor?: string;
}

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const { children, mT, mR, mB, mL, backgroundColor, ...rest } = props;

  return (
    <StyledTabset mB={mB} mT={mT} mR={mR} mL={mL} backgroundColor={backgroundColor}>
      <TabSetProvider {...rest}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </TabSetProvider>
    </StyledTabset>
  );
};

export default Tabset;
