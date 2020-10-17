import React, { FunctionComponent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getEventValue } from 'helpers';
import { useDebounce } from 'hooks/UI';
import Input from 'components/base-components/Input';
import { FormContext } from './context';

interface Props {
  id?: string;
  name: string;
  component?: any;
  onChange?: (event, setField, state) => void;
  onBlur?: (event, setField, state) => void;
  [x: string]: any;
}

const Field: FunctionComponent<Props> = (props) => {
  const { id, name, component, onChange, onBlur, ...rest } = props;
  const { state, setField } = useContext(FormContext);
  const [value, setValue] = useState(state[name]);
  const { debounceCall } = useDebounce(250);
  const WrappedInput = useMemo(() => component || Input, [component]);
  const inputId = useMemo(() => id || `${name}-input`, [id, name]);

  useEffect(() => {
    if (state[name] !== value) {
      setValue(state[name]);
    }
  }, [state[name]]);

  const handleChange = useCallback((event) => {
    const nextValue = getEventValue(event);
    const callback = onChange
      ? () => onChange(event, setField, state)
      : () => setField({ [name]: nextValue });

    setValue(nextValue);
    debounceCall(callback);
  }, [state, setField]);

  const handleBlur = useCallback((event) => {
    if (onBlur) {
      onBlur(event, setField, state);
    }
  }, [state, setField]);

  return (
    <WrappedInput
      id={inputId}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default Field;
