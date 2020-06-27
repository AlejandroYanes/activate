import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Colors from '../../../styles/colors';

interface Props {
  selected: boolean;
  label: string;
  onClick: (event) => void;
}

const MenuBlock: FunctionComponent<Props> = (props) => {
  const { selected, label, onClick } = props;
  const blockTopClassName = classnames(
    'app-side-menu__block--top',
    {
      selected,
    },
  );
  const blockContentClassName = classnames('app-side-menu__block__content', { selected });
  const blockBottomClassName = classnames(
    'app-side-menu__block--bottom',
    {
      selected,
    },
  );

  return (
    <li className="app-side-menu__block" style={{ backgroundColor: Colors.BRAND }} onClick={onClick}>
      <div className={blockTopClassName} style={{ backgroundColor: Colors.BRAND }}>
        <div />
      </div>
      <div className={blockContentClassName} style={{ backgroundColor: Colors.BRAND }}>
        <span>{label}</span>
      </div>
      <div className={blockBottomClassName} style={{ backgroundColor: Colors.BRAND }}>
        <div />
      </div>
    </li>
  );
};

MenuBlock.defaultProps = {
  selected: false,
};

export default MenuBlock;
