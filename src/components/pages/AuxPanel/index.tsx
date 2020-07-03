import React, { FunctionComponent } from 'react';
import IconButton from '../../base-components/IconButton';
import { Icons } from '../../base-components/SvgIcon/Icons';
import AvatarMenu from '../../experience/AvatarMenu';
import './styles.scss';

const AuxPanel: FunctionComponent = () => {
  return (
    <aside className="app-aux-panel">
      <header className="app-aux-panel__top">
        <IconButton
          variant="base"
          onClick={() => undefined}
          icon={Icons.SETTINGS}
          mR
        />
        <IconButton
          variant="base"
          onClick={() => undefined}
          icon={Icons.BELL}
          mR
        />
        <AvatarMenu />
      </header>
      <main className="app-aux-panel__body" />
    </aside>
  );
};

export default AuxPanel;
