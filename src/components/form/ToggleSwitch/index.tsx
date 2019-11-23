import classNames from 'classnames';
import * as React from 'react';
import Switch, { ReactSwitchProps } from 'react-switch';

import * as styles from './styles.scss';

type IconPosition = 'right' | 'left';

export interface ToggleSwitchProps extends ReactSwitchProps {
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
  // errorSeverity = 'warning',
  // hasError = false,
  id,
  label,
  labelClassName,
  checkedIcon = false,
  uncheckedIcon = false,
  handleDiameter = 20,
  height = 14,
  width = 28,
  offColor = '#d2d9e5',
  offHandleColor = '#FFFFFF',
  onHandleColor = '#0F6FFF',
  ...rest
}: ToggleSwitchProps) {
  const toggleSwitch = (
    <Switch
      checked={checked}
      checkedIcon={checkedIcon}
      className={classNames(styles.toggleSwitch, checked && styles.active)}
      handleDiameter={handleDiameter}
      height={height}
      offColor={offColor}
      offHandleColor={offHandleColor}
      onHandleColor={onHandleColor}
      uncheckedIcon={uncheckedIcon}
      width={width}
      {...rest}
    />
  );

  if (label) {
    return (
      <label className={classNames(styles.label, labelClassName)}>
        {toggleSwitch}
      </label>
    );
  }
}

export { ToggleSwitch };
