import classNames from 'classnames';
import * as React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

interface RawCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Call out element that needs attention
   * @default false
   */
  hasError?: boolean;
  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this.
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
  label: React.ReactNode;
  labelClassName?: string;
  /**
   * Required for associated <label>
   */
  id: string;
}

function RawCheckbox({
  className,
  errorSeverity = 'warning',
  hasError,
  id,
  label,
  labelClassName,
  type,
  ...rest
}: RawCheckboxProps) {
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
        type="checkbox"
        id={id}
        {...rest}
      />
      <label className={classNames(labelClassName, styles.label)} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export { RawCheckbox };
