import classNames from 'classnames';
import React, { useEffect } from 'react';

import styles from './styles.scss';

export interface SelectOption {
  label: string;
  value?: string;
}

export interface RawSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
  options: SelectOption[];
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
   * Default width
   * @default auto
   */
  intrinsicWidth?: 'auto' | '100%';
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
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
      )}
      {...rest}
    >
      {options.map(({ value, label }, i) => (
        <option key={value || label || i} value={value}>
          {label}
        </option>
      ))}
      {children}
    </select>
  );
}

export { RawSelect };
