import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

export type FieldErrorMessagePreset = 'text-only' | 'block';
export type FieldErrorMessageSeverity = 'warning' | 'error';

export interface FieldErrorMessageProps {
  children?: React.ReactNode;
  /**
   * Alternative to `children`. Use this when it would otherwise be versbose wrap the message in a closing tag.
   */
  message?: React.ReactNode;
  className?: string;
  /**
   * 'warning' | 'error'
   * @default warning
   */
  severity?: FieldErrorMessageSeverity;
  /**
   * 'text-only': inline text; 'block': text on dark background severity
   */
  preset?: FieldErrorMessagePreset;
}

function FieldErrorMessage({
  children,
  className,
  severity = 'warning',
  message,
  preset = 'text-only',
}: FieldErrorMessageProps) {
  if (!message && !children) {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.component,
        styles[preset],
        styles[severity],
        className,
      )}
    >
      {children || message}
    </div>
  );
}

export { FieldErrorMessage };
