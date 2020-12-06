import { isValidEmail, isValidWebSite } from './input-validations';

export enum RuleType {
  Required = 'Required',
  MinLength = 'MinLength',
  MaxLength = 'MaxLength',
  Min = 'Min',
  Max = 'Max',
  Email = 'Email',
  WebSite = 'WebSite',
  MatchRegExp = 'MatchRegExp',
}

export interface Rule {
  type: RuleType;
  value?: number | RegExp;
  message: string;
}

export type FunctionRule<T = any> = (value, entity: T) => string;

export interface ValidationRules {
  [x: string]: (Rule | FunctionRule) [];
}

export const commonRules = {
  required: {
    type: RuleType.Required,
    message: 'This field is required',
  },
};

function hasValue(value) {
  return value !== undefined && value !== null && value !== '';
}

export function checkCommonRules(rule: Rule, value) {
  const { type, message, value: matchValue } = rule;
  switch (type) {
    case RuleType.Required:
      return !hasValue(value) ? message : undefined;
    case RuleType.MinLength:
      return hasValue(value) && value.toString().length < matchValue
        ? message
        : undefined;
    case RuleType.MaxLength:
      return hasValue(value) && value.toString().length > matchValue
        ? message
        : undefined;
    case RuleType.Min:
      return hasValue(value) && parseFloat(value) < matchValue
        ? message
        : undefined;
    case RuleType.Max:
      return hasValue(value) && parseFloat(value) > matchValue
        ? message
        : undefined;
    case RuleType.Email:
      return hasValue(value) && !isValidEmail(value) ? message : undefined;
    case RuleType.WebSite:
      return hasValue(value) && !isValidWebSite(value) ? message : undefined;
    case RuleType.MatchRegExp:
      return hasValue(value) && !(matchValue as RegExp).test(value) ? message : undefined;
    default:
      return undefined;
  }
}

export function checkValidationRules(
  rules: (Rule | FunctionRule)[],
  value,
  entity,
): string {
  let error;

  for (let i = 0; i < rules.length && !error; i += 1) {
    const rule = rules[i];
    if (typeof rule === 'function') {
      error = rule(value, entity);
    } else {
      error = checkCommonRules(rule as Rule, value);
    }
  }

  return error;
}

export function validateEntity(entity, rules: ValidationRules) {
  const fieldsToValidate = Object.keys(rules);
  const errors = fieldsToValidate.reduce((accumulated, field) => ({
    ...accumulated,
    [field]: checkValidationRules(rules[field], entity[field], entity),
  }), {} as any);

  return {
    hasErrors: Object.values(errors).some((error) => !!error),
    errors,
  };
}
