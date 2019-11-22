import camelCase from 'camelcase';
import classNames from 'classnames';
import * as React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import * as styles from './styles.scss';

export type ButtonSize = 'large' | 'regular' | 'small' | 'xsmall' | 'inline';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'gray'
  | 'secondary-gray'
  | 'alternate';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Main control for button style
   */
  variant?: ButtonVariant;

  size?: ButtonSize;

  /**
   * Bold text
   */
  emphasis?: boolean;

  /** apply native disabled property */
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  /** provide hyperlink by styling <a> anchor link like a button */
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined;
  rel?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: EventFunctionT;
}

function ButtonRaw({
  children,
  className,
  emphasis = true,
  forwardedRef,
  href,
  target,
  rel,
  icon,
  onClick,
  size = 'regular',
  type = 'button',
  variant = 'primary',
  ...buttonElementProps
}: ButtonProps &
  ForwardedRefProps &
  React.PropsWithoutRef<JSX.IntrinsicElements['button']>) {
  const buttonClassNames = classNames([
    styles.component,
    styles[camelCase(variant)],
    styles[size],
    emphasis && styles.emphasis,
    icon && styles.icon,
    icon && !children && styles.iconOnly,
    className,
  ]);

  if (href) {
    return (
      <a
        ref={forwardedRef}
        className={buttonClassNames}
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {icon && <>{icon} </>}
        {children}
      </a>
    );
  }

  return (
    <button
      ref={forwardedRef}
      className={buttonClassNames}
      onClick={onClick}
      type={type}
      {...buttonElementProps}
    >
      {icon && <>{icon} </>}
      {children}
    </button>
  );
}

const Button = withForwardedRef<ButtonProps>(ButtonRaw);

export { Button };
