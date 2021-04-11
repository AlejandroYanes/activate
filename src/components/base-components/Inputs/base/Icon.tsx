import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  icon: Icons;
}

const InputIcon: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { icon } = props;

  return (
    <RenderIf condition={!!icon}>
      <AbsoluteContent>
        <SvgIcon icon={icon} color={colors.FONT} />
      </AbsoluteContent>
    </RenderIf>
  );
};

export default InputIcon;
