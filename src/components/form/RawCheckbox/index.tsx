import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label: ReactNode;
}

function RawCheckbox({ className, type, id, label, ...rest }: Props) {
  return (
    <>
      <input
        className={classNames(styles.component, className)}
        id={id}
        type="checkbox"
        {...rest}
      />
      <label className={classNames(styles.label, className)} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export { RawCheckbox };
export default RawCheckbox;
