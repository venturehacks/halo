import classNames from 'classnames';
import React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

export interface RawSelectOption {
  label: string;
  value?: string;
}

export interface RawSelectOptgroup {
  label: string;
  options: RawSelectOption[];
}

export interface RawSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  className?: string;
  /**
   * Since the most common callout is for validation errors,
   * you shouldn't need to customize this.
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
  /**
   * Call out element that needs attention
   * @default false
   */
  hasError?: boolean;
  /**
   * Default width
   * @default auto
   */
  intrinsicWidth?: 'auto' | '100%';
  /**
   * Field name
   */
  name?: string;
  options: Array<RawSelectOption | RawSelectOptgroup>;
}

function RawSelect({
  children,
  className,
  options = [],
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  ...rest
}: RawSelectProps) {
  return (
    <select
      className={classNames(
        styles.component,
        className,
        intrinsicWidth === '100%' && styles.width100,
        hasError && styles.hasError,
        hasError && FORM_FIELD_ERROR_IDENTIFIER,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
      )}
      {...rest}
    >
      {options.map((opt, i) => {
        if (isOptgroup(opt)) {
          return (
            <optgroup label={opt.label}>
              {opt.options.map(({ label, value }, j) => (
                <Option key={value || label || j} label={label} value={value} />
              ))}
            </optgroup>
          );
        }

        return (
          <Option
            key={opt.value || opt.label || i}
            label={opt.label}
            value={opt.value}
          />
        );
      })}
    </select>
  );
}

function Option({ label, value }: RawSelectOption) {
  return <option value={value}>{label}</option>;
}

function isOptgroup(opt: any): opt is RawSelectOptgroup {
  return (opt as RawSelectOptgroup).options !== undefined;
}

export { RawSelect };
