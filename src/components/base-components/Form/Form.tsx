import React, { FunctionComponent, useCallback } from 'react';
import { ValidationRules } from 'helpers/form-validations';
import { FormProvider } from './context';
import { Form as StyledForm } from './styled';

interface Props {
  id?: string;
  state: any;
  onChange: (value) => void;
  errors?: { [x: string]: string };
  onError?: (errors) => void;
  rules?: ValidationRules;
}

const disableOnSubmit = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

const Form: FunctionComponent<Props> = (props) => {
  const {
    id,
    state,
    onChange,
    errors,
    onError,
    rules,
    children,
  } = props;

  const setField = useCallback((value) => {
    const nextState = { ...state, ...value };
    onChange(nextState);
  }, [state, onChange]);

  const setErrors = useCallback((error) => {
    if (errors && onError) {
      const nextErrors = { ...errors, ...error };
      onError(nextErrors);
    }
  }, [errors, onError]);

  return (
    <StyledForm id={id} onSubmit={disableOnSubmit}>
      <FormProvider
        state={state}
        setField={setField}
        errors={errors}
        setErrors={setErrors}
        rules={rules}
      >
        {children}
      </FormProvider>
    </StyledForm>
  );
};

Form.defaultProps = {
  id: undefined,
};

export default Form;
