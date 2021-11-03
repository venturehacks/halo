import classNames from 'classnames';
import React from 'react';

import { ControlAlignment, FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

export interface RawRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * set to true to visually render radio elements as checkboxes
   * @default false
   */
  asCheckbox?: boolean;
  className?: string;
  /**
   * Vertical alignment of radio element
   * @default top
   */
  controlAlignment?: ControlAlignment;
  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this.
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
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
  variant?: 'plain' | 'pill';
}

function RawRadio({
  className,
  type,
  id,
  label,
  labelClassName,
  asCheckbox = false,
  variant = 'plain',
  controlAlignment = 'top',
  hasError,
  errorSeverity = 'warning',
  ...rest
}: RawRadioProps) {
  return (
    <>
      <input
        className={classNames(
          styles.component,
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
          styles.label,
          asCheckbox ? styles.asCheckbox : styles.asRadio,
          variant === 'pill' && styles.pill,
          controlAlignment === 'center' && styles.controlAlignCenter,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

export { RawRadio };
