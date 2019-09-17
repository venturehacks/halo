import classNames from 'classnames';
import React, { useEffect } from 'react';

import styles from './styles.scss';

export interface SelectOption {
  label: string;
  value?: string;
  selected?: boolean;
}

export interface RawSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
  options: SelectOption[];
}

function RawSelect({
  children,
  className,
  options = [],
  ...rest
}: RawSelectProps) {
  useEffect(() => {
    const totalSelected = options.reduce(
      (count, option) => (option.selected ? count + 1 : count),
      0,
    );
    if (totalSelected > 1) {
      // tslint:disable-next-line: no-console
      console.warn(
        `[Halo RawSelect] Only one option may be selected, but ${totalSelected} options are marked as 'selected'.`,
      );
    }
  }, [options]);

  return (
    <select className={classNames(styles.component, className)} {...rest}>
      {options.map(({ value, label, selected }, i) => (
        <option key={value || label || i} value={value} selected={!!selected}>
          {label}
        </option>
      ))}
      {children}
    </select>
  );
}

export { RawSelect };
