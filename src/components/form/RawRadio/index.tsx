import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

export interface RawRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * set to true to visually render radios as checkboxes
   */
  asCheckbox?: boolean;
  className?: string;
  label: React.ReactNode;
  labelClassName?: string;
  id: string;
}

RawRadio.defaultProps = {
  asCheckbox: false,
};

function RawRadio({
  className,
  type,
  id,
  label,
  labelClassName,
  asCheckbox,
  ...rest
}: RawRadioProps) {
  return (
    <>
      <input
        className={classNames(styles.component, className)}
        type="radio"
        id={id}
        {...rest}
      />
      <label
        className={classNames(
          labelClassName,
          asCheckbox ? styles.asCheckbox : styles.asRadio,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

export { RawRadio };
