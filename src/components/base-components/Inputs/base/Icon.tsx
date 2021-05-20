import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  icon: Icons;
  topSpaced?: boolean;
}

const InputIcon: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { topSpaced, icon } = props;

  return (
    <RenderIf condition={!!icon}>
      <AbsoluteContent topSpaced={topSpaced}>
        <SvgIcon icon={icon} color={colors.FONT} />
      </AbsoluteContent>
    </RenderIf>
  );
};

export default InputIcon;
