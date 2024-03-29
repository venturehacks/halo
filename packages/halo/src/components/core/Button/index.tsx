import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.module.scss';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'error'
  | 'clear';

const VARIANT_CSS: Record<ButtonVariant, string> = {
  primary: `bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500`,
  secondary: `bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500`,
  gray: `bg-gray-200 border-black text-black  hover:bg-gray-400
               disabled:bg-gray-100 disabled:border-gray-500 disabled:text-gray-500`,
  error: `bg-gtmpink-100 border-gtmpink-100 text-gtmpink-600 font-formal
                disabled:border-gray-200 disabled:text-gray-700 disabled:bg-gray-200
                hover:bg-gtmpink-300 hover:border-gtmpink-300 hover:text-gtmpink-600`,
  clear: `bg-transparent border-transparent  text-black
                disabled:text-gray-600 disabled:font-medium hover:bg-gray-100`,
};

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
   * @default md
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
  forwardedRef,
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  onClick,
  size = 'md',
  type = 'button',
  variant = 'primary',
  width,
  ...buttonElementProps
}: ButtonProps & ForwardedRefProps<HTMLButtonElement | HTMLAnchorElement>) {
  const buttonClassNames = classNames(
    styles.component,
    className,
    `rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200`,
    size === 'sm' && 'px-3 py-1',
    size === 'md' && 'px-4 py-2',
    size === 'lg' && 'px-10 py-3',
    VARIANT_CSS[variant],
    width === '100%' && 'w-full',
    icon && 'flex flex-row justify-center items-center',
  );

  const iconClassNames = 'fill-current stroke-current w-3 leading-none';

  const content = icon ? (
    <>
      {iconPosition === 'left' && (
        <span className={iconClassNames}>{icon}</span>
      )}
      <span>{children}</span>
      {iconPosition === 'right' && (
        <span className={iconClassNames}>{icon}</span>
      )}
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a
        ref={forwardedRef as unknown as React.Ref<HTMLAnchorElement>}
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
