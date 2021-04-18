import { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { SignAction } from '../';
import PrimaryActionBox from './ActionBox.primary';
import MobileActionBox from './ActionBox.mobile';

export interface ActionBoxProps {
  signAction: SignAction;
}

const componentMap = {
  [Layout.DESKTOP]: PrimaryActionBox,
  [Layout.TABLET]: PrimaryActionBox,
  [Layout.MOBILE]: MobileActionBox,
};

const ActionBox: FunctionComponent<ActionBoxProps> = (props) => {
  return (
    <RenderByLayout
      options={componentMap}
      fallback={PrimaryActionBox}
      {...props}
    />
  );
};

export default ActionBox;
