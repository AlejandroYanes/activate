import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DesktopModals, TabletModals } from 'components/modals';
import { Layout, useAppLayout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import { Title } from 'components/base-components/Typography';

interface Props {
  hash: string;
}

const modalsMap = {
  [Layout.DESKTOP]: DesktopModals,
  [Layout.TABLET]: TabletModals,
};

const emptyComponent = () => (
  <FlexBox direction="column" align="center" margin="80px 0 0 0">
    <SvgIcon
      icon="EXCLAMATION_TRIANGLE"
      size="page"
      color="WARNING_FONT_HIGHLIGHT"
    />
    <Title level={3}>Oops, there is nothing here.</Title>
  </FlexBox>
);

const ModalRenderer: FunctionComponent<Props> = (props) => {
  const { hash } = props;
  const layout = useAppLayout();
  const Component = modalsMap[layout][hash] || emptyComponent;

  useEffect(() => {
    if (layout === Layout.MOBILE) {
      const rootElement = document.getElementById('root');
      rootElement.style.display = 'none';

      return () => {
        rootElement.style.display = 'block';
      }
    }
  }, []);

  return ReactDOM.createPortal((
    <Component key={hash} />
  ), document.body);
}

export default ModalRenderer;
