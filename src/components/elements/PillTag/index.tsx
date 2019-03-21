import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface PillTagProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => any;
}

function PillTag({ children, className, href, onClick }: PillTagProps) {
  const classes = classNames(styles.component, className);

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  const buttonProps = onClick
    ? {
        onClick,
        role: 'button',
      }
    : {};

  return (
    <span className={classes} {...buttonProps}>
      {children}
    </span>
  );
}

export { PillTag };
export default PillTag;
