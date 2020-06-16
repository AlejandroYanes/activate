import React, { FunctionComponent } from 'react';
import IconButton from '../../basse-components/IconButton';
import { Icons } from '../../basse-components/SvgIcon/Icons';
import AvatarMenu from '../../experience/AvatarMenu';
import './styles.scss';
import Alert, { AlertType } from '../../basse-components/Alert';
import * as faker from 'faker';

const alerts = [
  { type: AlertType.SUCCESS, message: faker.lorem.lines(parseInt(faker.finance.amount(1, 5, 0), 10)) },
  { type: AlertType.INFO, message: faker.lorem.lines(parseInt(faker.finance.amount(1, 5, 0), 10)) },
  { type: AlertType.WARNING, message: faker.lorem.lines(parseInt(faker.finance.amount(1, 5, 0), 10)) },
  { type: AlertType.ERROR, message: faker.lorem.lines(parseInt(faker.finance.amount(1, 5, 0), 10)) },
];

function Alerts(): any {
  return alerts.map((alert, index) => (
    <Alert
      key={`alert-${index}`}
      message={alert.message}
      type={alert.type}
      mb
      actions={[{ label: 'test', onClick: () => undefined }]}
    />
  ));
}

const AuxPanel: FunctionComponent = () => {
  return (
    <aside className="app-aux-panel">
      <header className="app-aux-panel__top">
        <IconButton
          variant="border-inverse"
          onClick={() => undefined}
          icon={Icons.SETTINGS}
        />
        <IconButton
          variant="base"
          onClick={() => undefined}
          icon={Icons.BELL}
          className="app-aux-panel__top__option"
        />
        <AvatarMenu />
      </header>
      <main className="app-aux-panel__body">
        <Alerts />
      </main>
    </aside>
  );
};

export default AuxPanel;
