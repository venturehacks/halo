import classNames from 'classnames';
import React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

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

  /**
   * set to true to render pills
   * @default false
   */
  pill?: boolean;
}

function RawRadio({
  className,
  type,
  id,
  label,
  labelClassName,
  asCheckbox = false,
  pill = false,
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
          pill && styles.pill,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

export { RawRadio };
