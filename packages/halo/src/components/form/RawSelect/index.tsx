import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';

import {
  FormInputIntrinsicWidth,
  RawInputBase,
  rawInputClassNames,
} from '../RawInput';

import styles from './styles.module.scss';

export interface RawSelectProps
  extends RawInputBase,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  className?: string;
  /**
   * @default auto
   */
  intrinsicWidth?: FormInputIntrinsicWidth;
  /**
   * Field name
   */
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | (() => void);
  options: (RawSelectOption | RawSelectOptgroup)[];
}

export interface RawSelectOption {
  disabled?: boolean;
  label: string;
  value?: string;
}

export interface RawSelectOptgroup {
  disabled?: boolean;
  label: string;
  options: RawSelectOption[];
}

function RawSelectRaw({
  className,
  forwardedRef,
  options = [],
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  size = 'md',
  ...rest
}: RawSelectProps & ForwardedRefProps<HTMLSelectElement>) {
  return (
    <select
      ref={forwardedRef}
      className={classNames(
        rawInputClassNames({ errorSeverity, hasError, intrinsicWidth, size }),
        styles.component,
        className,
      )}
      {...rest}
    >
      {options.map((opt, i) => {
        if (isOptgroup(opt)) {
          return (
            <optgroup
              key={`${opt.label}-${i}`}
              disabled={opt.disabled}
              label={opt.label}
            >
              {opt.options.map((option, j) => (
                <Option
                  key={option.value || option.label || j}
                  option={option}
                />
              ))}
            </optgroup>
          );
        }

        return <Option key={opt.value || opt.label || i} option={opt} />;
      })}
    </select>
  );
}

function Option({ option }: { option: RawSelectOption }) {
  const { value, label, disabled } = option;
  return (
    <option disabled={disabled} value={value}>
      {label}
    </option>
  );
}

function isOptgroup(opt: any): opt is RawSelectOptgroup {
  return (opt as RawSelectOptgroup).options !== undefined;
}

const RawSelect = withForwardedRef<RawSelectProps, HTMLSelectElement>(
  RawSelectRaw,
);

export { RawSelect };
