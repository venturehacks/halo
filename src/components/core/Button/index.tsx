import classNames from 'classnames';
import * as React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import * as styles from './styles.scss';

export interface ButtonProps {
  size?: 'large' | 'regular' | 'small' | 'xsmall' | 'inline';
  variant?: 'primary' | 'secondary' | 'gray' | 'secondary-gray' | 'alternate';
  /** apply native disabled property */
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  /** provide hyperlink by styling <a> anchor link like a button */
  href?: string;
  type?: 'submit' | 'button' | 'clear' | 'reset';
  onClick?: EventFunctionT;
}

function ButtonRaw({
  children,
  className,
  forwardedRef,
  href,
  icon,
  onClick,
  size = 'regular',
  type = 'button',
  variant = 'primary',
  ...other
}: ButtonProps &
  ForwardedRefProps &
  React.PropsWithoutRef<JSX.IntrinsicElements['button']>) {
  const buttonClassNames = classNames([
    styles.component,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'alternate' && styles.alternate,
    variant === 'gray' && styles.gray,
    variant === 'secondary-gray' && styles.secondaryGray,
    size === 'large' && styles.large,
    size === 'regular' && styles.regular,
    size === 'small' && styles.small,
    size === 'xsmall' && styles.xsmall,
    size === 'inline' && styles.inline,
    icon && styles.icon,
    icon && !children && styles.iconOnly,
    className,
  ]);

  if (href) {
    return (
      <a
        className={buttonClassNames}
        href={href}
        onClick={onClick}
        ref={forwardedRef}
      >
        {icon} {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      ref={forwardedRef}
      type={type}
      {...other}
    >
      {icon} {children}
    </button>
  );
}

const Button = withForwardedRef<ButtonProps>(ButtonRaw);

export { Button };
