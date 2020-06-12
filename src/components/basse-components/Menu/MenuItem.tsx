import React, { FunctionComponent } from 'react';
import SvgIcon from '../SvgIcon';
import RenderIf from '../RenderIf';
import { Icons } from '../SvgIcon/Icons';

interface Props {
  label: string;
  icon?: JSX.Element | Icons;
  onClick?: (event) => void;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { label, icon, onClick } = props;
  const itemIcon = icon && typeof icon === 'string'
    ? <SvgIcon className="menu-item__icon" icon={icon} />
    : <div className="menu-item__icon">{icon}</div>;

  return (
    <li className="menu-item" onClick={onClick}>
      <RenderIf condition={!!icon}>
        {itemIcon}
      </RenderIf>
      <div className="menu-item__label">
        <span>{label}</span>
      </div>
    </li>
  );
};

export default MenuItem;
