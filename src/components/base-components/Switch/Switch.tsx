import React, { FunctionComponent } from 'react';
import { CaseProps } from 'components/base-components/Switch/Case';

interface SwitchProps {
  by: any;
  compareBy?: string;
  comparisonFunction?: (a, b) => boolean;
}

const Switch: FunctionComponent<SwitchProps> = (props) => {
  const { by, compareBy, comparisonFunction, children } = props;

  const cases: CaseProps[] = React.Children.map(children, ((child: any) => child.props));

  const validCase = cases.find((caseChild) => {
    if (comparisonFunction) {
      return comparisonFunction(by, caseChild.value);
    }

    if (compareBy) {
      return by[compareBy] === caseChild.value[compareBy];
    }

    return by === caseChild.value;
  });

  if (validCase) {
    const { component: CaseComponent, value, ...rest } = validCase;
    return <CaseComponent {...rest} />;
  }

  return null;
};

export default Switch;
