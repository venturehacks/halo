import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

interface SelectOption {
  label: string;
  value?: string;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
  options: SelectOption[];
}

export default function RawSelect({
  children,
  className,
  options,
  ...rest
}: Props) {
  return (
    <select className={classNames(styles.component, className)} {...rest}>
      {options.map(({ value, label }, i) => (
        <option key={value || i} value={value}>
          {label}
        </option>
      ))}
      {children}
    </select>
  );
}
