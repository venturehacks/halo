import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

export interface RawTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

function RawTextarea({ className, ...rest }: RawTextareaProps) {
  return (
    <textarea className={classNames(styles.component, className)} {...rest} />
  );
}

export { RawTextarea };
