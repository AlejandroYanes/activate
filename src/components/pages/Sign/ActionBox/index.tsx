import { FunctionComponent } from 'react';
import { Layout, RenderByLayout } from 'activate-components';
import PrimaryActionBox from './ActionBox.primary';
import MobileActionBox from './ActionBox.mobile';
import { SignAction } from '../state';

export interface ActionBoxProps {
  signAction: SignAction;
  callingApi: boolean;
  onClick: () => void;
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
