import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function RawTextarea({ className, ...rest }: Props) {
  return (
    <textarea className={classNames(styles.component, className)} {...rest} />
  );
}
