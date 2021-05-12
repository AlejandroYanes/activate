import { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { SelectOption } from './index';

interface Props {
  value: SelectOption | SelectOption[];
}

const Label: FunctionComponent<Props> = (props) => {
  const { value } = props;
  const text = Array.isArray(value)
    ? (value as SelectOption[]).map(v => v.label).join(', ')
    : value?.label;

  return (
    <Text ellipsis>{text}</Text>
  );
};

export default Label;
