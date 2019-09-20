import classNames from 'classnames';
import React, { ReactNode } from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
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
  id: string;
  label: ReactNode;
  labelClassName?: string;
}

function RawCheckbox({
  className,
  type,
  id,
  label,
  labelClassName,
  hasError,
  errorSeverity = 'warning',
  ...rest
}: Props) {
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
        type="checkbox"
        {...rest}
      />
      <label className={classNames(labelClassName, styles.label)} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export { RawCheckbox };
