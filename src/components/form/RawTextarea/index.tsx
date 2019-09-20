import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

export interface RawTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
   * Default width
   * @default auto
   */
  intrinsicWidth?: 'auto' | '100%';
}

function RawTextarea({
  className,
  intrinsicWidth,
  hasError,
  errorSeverity = 'warning',
  ...rest
}: RawTextareaProps) {
  return (
    <textarea
      className={classNames(
        styles.component,
        className,
        intrinsicWidth === '100%' && styles.width100,
        hasError && styles.hasError,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
      )}
      {...rest}
    />
  );
}

export { RawTextarea };
