import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';

import {
  FormInputIntrinsicWidth,
  InputBase,
  rawInputClassNames,
} from '../Input';

import styles from './styles.module.scss';

export interface SelectProps
  extends InputBase,
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
  options: (SelectOption | SelectOptgroup)[];
}

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value?: string;
}

export interface SelectOptgroup {
  disabled?: boolean;
  label: string;
  options: SelectOption[];
}

function SelectRaw({
  className,
  forwardedRef,
  options = [],
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  size = 'md',
  ...rest
}: SelectProps & ForwardedRefProps<HTMLSelectElement>) {
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

function Option({ option }: { option: SelectOption }) {
  const { value, label, disabled } = option;
  return (
    <option disabled={disabled} value={value}>
      {label}
    </option>
  );
}

function isOptgroup(opt: any): opt is SelectOptgroup {
  return (opt as SelectOptgroup).options !== undefined;
}

const Select = withForwardedRef<SelectProps, HTMLSelectElement>(SelectRaw);

export { Select };
