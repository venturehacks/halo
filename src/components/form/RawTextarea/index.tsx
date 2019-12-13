import classNames from 'classnames';
import React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

export interface RawTextareaProps {
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

  /**
   * Field name
   */
  name?: string;
}

function RawTextarea({
  className,
  intrinsicWidth,
  hasError = false,
  errorSeverity = 'warning',
  ...rest
}: RawTextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={classNames(
        styles.component,
        className,
        intrinsicWidth === '100%' && styles.width100,
        hasError && styles.hasError,
        hasError && FORM_FIELD_ERROR_IDENTIFIER,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
      )}
      {...rest}
    />
  );
}

export { RawTextarea };
