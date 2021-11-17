import { camelCase } from 'change-case';
import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.scss';

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg'
  /**
   * @deprecated 0.15
   */
  | 'large'
  | 'regular'
  | 'small'
  | 'xsmall'
  | 'inline';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'destructive'
  /**
   * @deprecated 0.15
   */
  | 'warning'
  | 'danger'
  | 'success'
  | 'secondary-gray'
  | 'clear'
  | 'alternate';

export type IconPosition = 'left' | 'right';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  /**
   * Icon position relative to the content
   * @default left
   */
  iconPosition?: IconPosition;
  onClick?: React.MouseEventHandler;
  rel?: string;
  /**
   * Size preset
   * @default sm
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
  iconPosition = 'left',
  onClick,
  size = 'sm',
  type = 'button',
  variant = 'primary',
  width,
  ...buttonElementProps
}: ButtonProps & ForwardedRefProps<HTMLButtonElement | HTMLAnchorElement>) {
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
      {iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
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
