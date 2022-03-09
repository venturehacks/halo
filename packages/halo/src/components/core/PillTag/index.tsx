import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export interface PillTagProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  /**
   * Explicit hint that this pill tag is interactive
   * @default false
   */
  interactive?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
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
    if (onClick) {
      console.warn(
        `[Halo PillTag] onClick handler cannot be assigned when href is supplied`,
      );
    }

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
        tabIndex: 0,
      }
    : {};

  return (
    <span className={classes} {...buttonProps}>
      {children}
    </span>
  );
}

export { PillTag };
