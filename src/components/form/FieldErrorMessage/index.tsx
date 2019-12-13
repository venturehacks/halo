import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

export type FieldErrorMessagePreset = 'text-only' | 'block';
export type FieldErrorMessageSeverity = 'warning' | 'critical';

export interface FieldErrorMessageProps {
  children?: React.ReactNode;
  className?: string;

  /**
   * warning | critical
   * @default warning
   */
  errorSeverity?: FieldErrorMessageSeverity;

  /**
   * Alternative to `children`. Use this when it would otherwise be versbose wrap the message in a closing tag.
   */
  message?: React.ReactNode;
  /**
   * text-only = inline text; block = text on dark background
   */
  preset?: FieldErrorMessagePreset;
}

function FieldErrorMessage({
  children,
  className,
  errorSeverity = 'warning',
  message,
  preset = 'text-only',
}: FieldErrorMessageProps) {
  if (!message && !children) {
    return null;
  }

  if (message && children) {
    // tslint:disable-next-line: no-console
    console.warn(
      `[Halo FieldErrorMessage] expected only 'message' or 'children' prop, but received both.`,
    );
  }

  return (
    <div
      className={classNames(
        styles.component,
        styles[preset],
        styles[errorSeverity],
        className,
      )}
    >
      {children || message}
    </div>
  );
}

export { FieldErrorMessage };
