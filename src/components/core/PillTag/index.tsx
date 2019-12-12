import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface PillTagProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  /**
   * Explicit hint that this pill tag is interactive
   * @default false
   */
  interactive?: boolean;
  onClick?: EventFunctionT;
}

function PillTag({
  children,
  className,
  href,
  interactive,
  onClick,
}: PillTagProps) {
  const classes = classNames(
    styles.component,
    className,
    (href || interactive) && styles.anchor,
  );

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
