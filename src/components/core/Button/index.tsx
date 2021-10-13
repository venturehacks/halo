import camelCase from 'camelcase';
import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.scss';

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

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * Apply native disabled property and styles
   */
  disabled?: boolean;
  /**
   * bold text
   * @default true
   */
  emphasis?: boolean;
  /**
   * Render as HTML anchor/hyperlink, styled like a button
   */
  href?: string;
  /**
   * JSX icon
   */
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  rel?: string;
  /**
   * Size preset
   * @default regular
   */
  size?: ButtonSize;
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined;
  /**
   * DOM element type
   * @default button
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * Appearance preset
   * @default primary
   */
  variant?: ButtonVariant;

  /**
   * Force button to 100% within continaer
   */
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
  ForwardedRefProps<HTMLButtonElement | HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonClassNames = classNames([
    styles.component,
    styles[camelCase(variant)],
    styles[size],
    emphasis && styles.emphasis,
    icon && styles.hasIcon,
    icon && !children && styles.iconOnly,
    width === '100%' && styles.width100,
    className,
  ]);

  const content = icon ? (
    <>
      <span className={styles.icon}>{icon}</span>
      <span>{children}</span>
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a
        ref={(forwardedRef as unknown) as React.Ref<HTMLAnchorElement>}
        className={buttonClassNames}
        data-test="Button"
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={forwardedRef as React.Ref<HTMLButtonElement>}
      className={buttonClassNames}
      data-test="Button"
      onClick={onClick}
      type={type}
      {...buttonElementProps}
    >
      {content}
    </button>
  );
}

const Button = withForwardedRef<ButtonProps, HTMLButtonElement>(ButtonRaw);

export { Button };
