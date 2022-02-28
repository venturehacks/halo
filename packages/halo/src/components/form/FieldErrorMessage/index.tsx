import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export type FieldErrorMessagePreset = 'text-only' | 'block';
export type FieldErrorMessageSeverity = 'warning' | 'critical';

export interface FieldErrorMessageProps {
  children?: React.ReactNode;
  className?: string;

  /**
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
        'text-sm max-h-none overflow-hidden',
        preset === 'text-only' && styles.textOnly,
        preset === 'text-only' && 'whitespace-pre-wrap mt-1',
        preset === 'block' && 'font-medium antialiased rounded py-2 px-4 mb-4',
        errorSeverity === 'warning' && 'text-dark-warning',
        errorSeverity === 'warning' && preset === 'block' && 'bg-orange-100',
        errorSeverity === 'critical' && 'text-dark-error',
        errorSeverity === 'critical' && preset === 'block' && 'bg-red-200',
        className,
      )}
    >
      {children || message}
    </div>
  );
}

export { FieldErrorMessage };
