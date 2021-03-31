import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { TabSetProvider } from './context';
import { List, StyledTabset } from './styled';

interface TabsetProps extends PositionProps {
  bordered?: boolean;
  activeTab: string;
  onTabChange: (activeTab) => void;
}

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const layout = useAppLayout();
  const { activeTab, onTabChange, bordered, fullWidth, children, ...rest } = props;

  return (
    <AnimateSharedLayout type="crossfade">
      <StyledTabset bordered={bordered} fullWidth={fullWidth} {...rest}>
        <TabSetProvider
          activeTab={activeTab}
          onTabChange={onTabChange}
          fullWidth={fullWidth}
          disableFocus={layout !== Layout.FULL}
        >
          <List>
            {children}
          </List>
        </TabSetProvider>
      </StyledTabset>
    </AnimateSharedLayout>
  );
};

export default Tabset;
