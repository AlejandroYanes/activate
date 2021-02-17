import React, { FunctionComponent, useCallback, useState } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Backdrop from 'components/base-components/Backdrop';
import RenderIf from 'components/base-components/RenderIf';
import Panel from './Panel';
import { Floating } from './styled';

const FloatingContainer: FunctionComponent = () => {
  const colors = useAppColors();
  const layout = useAppLayout();
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = useCallback(() => setShowPanel(old => !old), []);

  return (
    <>
      <Floating layout={layout}>
        <IconButton
          onClick={togglePanel}
          icon={Icons.GRID_ELEMENTS}
          variant="fill"
          size="large"
          buttonColor="brand"
          color={colors.WHITE}
        />
      </Floating>
      <RenderIf condition={showPanel}>
        <Backdrop onClick={togglePanel}>
          <Panel onClose={layout === Layout.SMALL ? togglePanel : undefined} />
        </Backdrop>
      </RenderIf>
    </>
  );
};

export default FloatingContainer;
