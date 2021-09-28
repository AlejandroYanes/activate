import React, { FunctionComponent, useState } from 'react';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import Calendar from 'components/base-components/Calendar';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { Button } from 'components/base-components/Button';
import Options from './Options';
import { Footer } from './styled';
import { ViewProps } from './type';

const PrimaryRender: FunctionComponent<ViewProps> = (props) => {
  const { value, showOptions, onChange, onClose } = props;
  const [dates, setDates] = useState(value);

  const sendDateSelected = () => onChange(dates);

  return (
    <>
      <FlexBox align="stretch">
        <RenderIf condition={showOptions}>
          <Options onSelect={onChange} />
        </RenderIf>
        <Calendar useRange value={dates} onChange={setDates} />
      </FlexBox>
      <Footer>
        <Button
          onClick={onClose}
          label="Cancel"
          color="background"
          variant="fill"
          mR
        />
        <Button
          variant="fill"
          label="Select"
          onClick={sendDateSelected}
        />
      </Footer>
    </>
  );
};

const MobileRender: FunctionComponent<ViewProps> = (props) => {
  const { value, onChange, onClose } = props;
  const [dates, setDates] = useState(value);

  const sendDateSelected = () => onChange(dates);

  return (
    <>
      <Calendar useRange value={dates} onChange={setDates} />
      <Footer>
        <Button
          onClick={onClose}
          label="Cancel"
          color="background"
          variant="fill"
          mR
        />
        <Button
          variant="fill"
          label="Select"
          onClick={sendDateSelected}
        />
      </Footer>
    </>
  );
};

const renderMap = {
  [Layout.DESKTOP]: PrimaryRender,
  [Layout.TABLET]: PrimaryRender,
  [Layout.MOBILE]: MobileRender,
};

const DateRangeView: FunctionComponent<ViewProps> = (props) => {
  return (
    <RenderByLayout options={renderMap} {...props} />
  );
};

export default DateRangeView;
