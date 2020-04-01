import React from 'react';
import Avatar from '../../basse-components/Avatar';
import './styles.scss';

export default function AuxPanel() {
  return (
    <aside className="app-aux-panel">
      <div className="app-aux-panel__top">
        <Avatar icon="user10" />
      </div>
      <div className="app-aux-panel__body" />
    </aside>
  );
}

