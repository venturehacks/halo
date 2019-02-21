import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

interface PillTagProps {
  children?: React.ReactNode;
  className?: string;
}

function PillTag({ children, className }: PillTagProps) {
  const classes = classNames(
    styles.component,
  )
  return (
    <span className={classes}>
      {children}
    </span>
  );
}

export { PillTag, PillTagProps };
export default PillTag;
