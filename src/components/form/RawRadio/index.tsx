import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: React.ReactNode;
  labelClassName?: string;
  id: string;
  // set `asCheckbox` to true to visually render radios as checkboxes
  asCheckbox?: boolean;
}

RawRadio.defaultProps = {
  asCheckbox: false,
};

export default function RawRadio({
  className,
  type,
  id,
  label,
  labelClassName,
  asCheckbox,
  ...rest
}: Props) {
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
