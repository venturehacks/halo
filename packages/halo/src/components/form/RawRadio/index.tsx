import classNames from 'classnames';
import React from 'react';

import { ControlAlignment, FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';
import { FormInputErrorSeverity } from '../RawInput';

import styles from './styles.module.scss';

export interface RawRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Vertical alignment of radio element
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
   * Call out element that needs attention
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
   * @default radio
   */
  variant?: 'radio' | 'checkbox' | 'pill';
}

function RawRadio({
  className,
  controlAlignment = 'top',
  errorSeverity = 'warning',
  hasError,
  id,
  label,
  labelClassName,
  type, // deliberately discard
  variant = 'radio',
  ...rest
}: RawRadioProps) {
  return (
    <>
      <input
        className={classNames(
          styles.input,
          className,
          hasError && styles.hasError,
          hasError && FORM_FIELD_ERROR_IDENTIFIER,
          errorSeverity === 'warning' && styles.warning,
          errorSeverity === 'critical' && styles.critical,
        )}
        id={id}
        type="radio"
        {...rest}
      />
      <label
        className={classNames(
          labelClassName,
          variant === 'radio' && styles.radio,
          variant === 'checkbox' && styles.checkbox,
          variant === 'pill' && [styles.radio, styles.pill],
          controlAlignment === 'center' && styles.controlAlignCenter,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

RawRadio.displayName = 'RawRadio';

export { RawRadio };
