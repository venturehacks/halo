import classNames from 'classnames';
import * as React from 'react';
import Switch, { ReactSwitchProps } from 'react-switch';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';

import * as styles from './styles.scss';

export interface ToggleSwitchProps {
  checked?: boolean;
  className?: string;

  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
  /**
   * Call out element that needs attention
   * @default false
   */
  hasError?: boolean;

  id: string;

  label: React.ReactNode;
  labelClassName?: string;

  /**
   * Field name
   */
  name?: string;
}

export default function ToggleSwitch({
  checked = false,
  className,
  errorSeverity = 'warning',
  hasError = false,
  id,
  label,
  labelClassName,
  checkedIcon = false,
  uncheckedIcon = false,
  handleDiameter = 20,
  height = 14,
  width = 28,
  offColor = '#d2d9e5',
  onColor = '#dde9f8',
  offHandleColor = '#FFFFFF',
  onHandleColor = '#0F6FFF',
  ...rest
}: ToggleSwitchProps & ReactSwitchProps) {
  return (
    <div
      className={classNames(
        styles.component,
        hasError && styles.hasError,
        hasError && FORM_FIELD_ERROR_IDENTIFIER,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
        checked && styles.active,
      )}
    >
      <label className={classNames(styles.label, labelClassName)} htmlFor={id}>
        <Switch
          checked={checked}
          checkedIcon={checkedIcon}
          handleDiameter={handleDiameter}
          height={height}
          id={id}
          offColor={offColor}
          offHandleColor={offHandleColor}
          onColor={onColor}
          onHandleColor={onHandleColor}
          uncheckedIcon={uncheckedIcon}
          width={width}
          {...rest}
        />
        {label && <span className={styles.labelContent}>{label}</span>}
      </label>
    </div>
  );
}

export { ToggleSwitch };
