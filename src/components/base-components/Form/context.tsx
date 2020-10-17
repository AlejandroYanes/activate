import React, { FunctionComponent, createContext, ReactNode, useMemo } from 'react';

interface Props {
  value: object;
  setField: (value: any) => void;
  children: ReactNode;
}

export const FormContext = createContext(undefined);

export const FormProvider: FunctionComponent<Props> = (props) => {
  const { value, setField, children } = props;
  const providerValue = useMemo(() => (
    {
      state: value,
      setField,
    }
  ), [value, setField]);

  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  );
};
