import classNames from 'classnames';
import React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import styles from './styles.scss';

export interface RawToggleSwitchProps {
  checked?: boolean;

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

  label?: React.ReactNode;
  labelClassName?: string;

  /**
   * Field name
   */
  name?: string;

  /**
   * Required to fully manage this component
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Position of toggle in relation to label text
   * @default left
   */
  togglePosition?: 'left' | 'right';
}

function RawToggleSwitch({
  className,
  errorSeverity = 'warning',
  hasError,
  id,
  label,
  labelClassName,
  type,
  togglePosition,
  ...rest
}: RawToggleSwitchProps & React.InputHTMLAttributes<HTMLInputElement>) {
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
      <label
        className={classNames(
          labelClassName,
          styles.label,
          togglePosition === 'right' && styles.toggleRight,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

export { RawToggleSwitch };
