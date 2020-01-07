import camelCase from 'camelcase';
import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import * as styles from './styles.scss';

export type ButtonSize =
  | 'large'
  | 'regular'
  | 'small'
  | 'xsmall'
  /**
   * @deprecated 0.9
   */
  | 'inline';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'secondary-gray'
  | 'clear'
  | 'gray'
  /**
   *  @deprecated 0.9
   */
  | 'alternate';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  /**
   * Apply native disabled property and styles
   */
  disabled?: boolean;
  /**
   * Bold text
   * @default true
   */
  emphasis?: boolean;
  /**
   * Render as HTML anchor/hyperlink, styled like a button
   */
  href?: string;
  icon?: React.ReactNode;
  onClick?: EventFunctionT;
  rel?: string;
  size?: ButtonSize;
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined;
  type?: 'submit' | 'button' | 'reset';
  /**
   * Main control for button style
   */
  variant?: ButtonVariant;

  width?: '100%';
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
  width,
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
    width === '100%' && styles.width100,
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
