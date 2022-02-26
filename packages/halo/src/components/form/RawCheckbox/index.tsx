import classNames from 'classnames';
import React from 'react';

import { ControlAlignment, FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';
// import { rawInputClassNames } from '../RawInput';

import styles from './styles.module.scss';

export interface RawCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Vertical alignment of checkbox element.
   * @default top
   */
  controlAlignment?: ControlAlignment;
  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this.
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
  /**
   * Call out element that needs attention.
   * @default false
   */
  hasError?: boolean;
  /**
   * Required for associated <label>
   */
  id: string;
  label: React.ReactNode;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  variant?: 'checkbox' | 'pill' | 'toggle-switch';
}

function RawCheckbox({
  variant = 'checkbox',
  className,
  controlAlignment = 'top',
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
          styles.input,
          hasError && styles.hasError,
          hasError && FORM_FIELD_ERROR_IDENTIFIER,
          errorSeverity === 'warning' && styles.warning,
          errorSeverity === 'critical' && styles.critical,
          className,
        )}
        id={id}
        type="checkbox"
        {...rest}
      />
      <label
        className={classNames(
          labelClassName,
          styles.label,
          (variant === 'checkbox' || variant === 'pill') && styles.checkbox,
          variant === 'pill' && styles.pill,
          variant === 'toggle-switch' && styles.toggleSwitch,
          controlAlignment === 'center' && styles.controlAlignCenter,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

RawCheckbox.displayName = 'RawCheckbox';

export { RawCheckbox };
