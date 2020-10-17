import React, { FunctionComponent, useCallback } from 'react';
import { FormProvider } from './context';

interface Props {
  id?: string;
  value: object;
  onChange: (nextValue: object) => void;
}

const Form: FunctionComponent<Props> = (props) => {
  const { id, value, onChange, children } = props;

  const setField = useCallback((nextValues) => {
    const nextState = { ...value, ...nextValues };
    onChange(nextState);
  }, [value, onChange]);

  return (
    <form id={id}>
      <FormProvider value={value} setField={setField}>
        {children}
      </FormProvider>
    </form>
  );
};

export default Form;
