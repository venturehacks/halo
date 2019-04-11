import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

interface Props {
  text?: string;
  className?: string;
}

function FieldError({ text, className }: Props) {
  if (!text) {
    return null;
  }

  return <div className={classNames(styles.component, className)}>{text}</div>;
}

export { FieldError };
