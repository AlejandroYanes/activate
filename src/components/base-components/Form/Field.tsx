import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getEventValue } from 'helpers';
import { useDebounce } from 'hooks/UI/use-debounce';
import { checkValidationRules, FunctionRule, Rule } from 'helpers/form-validations';
import { Input } from 'components/base-components/Inputs';
import FormContext from './context';

interface Props {
  id?: string;
  name: string;
  label?: string | ReactNode;
  component?: any;
  skipDebounce?: boolean;
  onChange?: (event, setField, state) => void;
  onBlur?: (event, setField, state) => void;
  rules?: (Rule | FunctionRule)[];
  required?: boolean;
  [x: string]: any;
}

const Field: FunctionComponent<Props> = (props) => {
  const { component, id, name, onChange, onBlur, skipDebounce, ...rest } = props;
  const { state, setField, errors, setErrors, rules } = useContext(FormContext);
  const [{ value, isDirty }, setInputState] = useState({
    value: state[name],
    isDirty: false,
  });
  const { debounceCall } = useDebounce(250);

  const stateValue = state[name];
  const fieldRules = rules ? rules[name] : undefined;
  const fieldError = errors ? errors[name] : undefined;
  const WrappedComponent = component || Input;
  const inputId = id || name;

  const handleChange = useCallback((event) => {
    if (event && event.persist) {
      event.persist();
    }
    const nextValue = getEventValue(event);
    const callback = onChange
      ? () => onChange(event, setField, state)
      : () => setField({ [name]: nextValue });

    setInputState({
      value: nextValue,
      isDirty: true,
    });
    if (skipDebounce) {
      callback();
    } else {
      debounceCall(callback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, setField, onChange]);

  const handleBlur = useCallback((event) => {
    if (onBlur) {
      onBlur(event, setField, state);
      return;
    }

    if (fieldRules && isDirty) {
      const error = checkValidationRules(fieldRules, value, state);

      if (error || fieldError) {
        setErrors({ [name]: error });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state, setField, onBlur, errors, setErrors, isDirty, fieldRules]);

  useEffect(() => {
    if (stateValue !== value) {
      setInputState({
        value: stateValue,
        isDirty: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateValue]);

  return (
    <WrappedComponent
      id={inputId}
      name={name}
      value={value || ''}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors ? errors[name] : undefined}
      {...rest}
    />
  );
};

export default Field;