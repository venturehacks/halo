import classNames from 'classnames';
import React from 'react';

import { ControlAlignment, FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';
import { FormInputErrorSeverity } from '../Input';

import styles from './styles.module.scss';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Vertical alignment of checkbox element.
   * @default top
   */
  controlAlignment?: ControlAlignment;
  /**
   * Validation error = warning
   * Server error = critical
   * @default warning
   */
  errorSeverity?: FormInputErrorSeverity;
  /**
   * Call out element that needs attention.
   * @default false
   */
  hasError?: boolean;
  /**
   * Required for associated <label>
   */
  id: string;
  label: React.ReactNode;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  /**
   * Control element styling.
   * @default checkbox
   */
  variant?: 'checkbox' | 'pill' | 'toggle-switch';
}

function Checkbox({
  className,
  controlAlignment = 'top',
  errorSeverity = 'warning',
  hasError,
  id,
  label,
  labelClassName,
  variant = 'checkbox',
  type, // deliberately discard
  ...rest
}: CheckboxProps) {
  return (
    <>
      <input
        className={classNames(
          styles.input,
          hasError && styles.hasError,
          hasError && FORM_FIELD_ERROR_IDENTIFIER,
          errorSeverity === 'warning' && styles.warning,
          errorSeverity === 'critical' && styles.critical,
          className,
        )}
        id={id}
        type="checkbox"
        {...rest}
      />
      <label
        className={classNames(
          labelClassName,
          styles.label,
          (variant === 'checkbox' || variant === 'pill') && styles.checkbox,
          variant === 'pill' && styles.pill,
          variant === 'toggle-switch' && styles.toggleSwitch,
          controlAlignment === 'center' && styles.controlAlignCenter,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

Checkbox.displayName = 'Checkbox';

export { Checkbox };
