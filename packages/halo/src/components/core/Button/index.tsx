import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'error'
  | 'clear'
  | 'gtm-primary'
  | 'gtm-secondary'
  | 'gtm-gray'
  | 'gtm-clear'
  | 'gtm-error';

const VARIANT_CSS: Record<ButtonVariant, string> = {
  'primary': `bg-dark-brand border-dark-brand text-white font-medium
              disabled:bg-blue-300 disabled:border-blue-300
              hover:bg-blue-600 hover:border-blue-600`,
  'gtm-primary': `bg-black border-black text-white font-normal
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500`,
  'secondary': `bg-white border-blue-500 text-blue-500 font-medium
                disabled:bg-white disabled:border-blue-300 disabled:text-blue-300
                hover:bg-slate-100`,
  'gtm-secondary': `bg-white border-black text-black font-normal
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500`,
  'gray': `bg-gray-100 border-dark-aaa text-dark-aaa font-medium
           disabled:bg-gray-100 disabled:border-dark-a disabled:text-dark-a
           hover:bg-slate-200`,
  'gtm-gray': `bg-gray-200 border-black text-black font-normal hover:bg-gray-400
               disabled:bg-gray-100 disabled:border-gray-500 disabled:text-gray-500`,
  'error': `bg-red-100 border-red-100 text-light-error font-medium
            disabled:border-gray-100 disabled:text-gray-500 disabled:bg-gray-100
            hover:bg-red-200`,
  'gtm-error': `bg-gtmpink-100 border-gtmpink-100 text-gtmpink-600 font-formal
                disabled:border-gray-200 disabled:text-gray-700 disabled:bg-gray-200
                hover:bg-gtmpink-300 hover:border-gtmpink-300 hover:text-gtmpink-600`,
  'clear': `bg-transparent border-transparent font-medium text-dark-aaa
            disabled:text-dark-a disabled:font-medium hover:bg-gray-100`,
  'gtm-clear': `bg-transparent border-transparent font-normal text-black
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
  const buttonClassNames = classNames([
    className,
    `rounded border-solid border gap-x-2 mr-4 last:mr-0 whitespace-nowrap
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50`,
    size === 'sm' && 'px-3 py-1.5',
    size === 'md' && 'px-4 py-2.5',
    size === 'lg' && 'px-10 py-3.5',
    VARIANT_CSS[variant],
    width === '100%' && 'w-full',
    icon && 'flex flex-row justify-center items-center',
  ]);

  const iconClassNames = 'fill-current stroke-current w-3';

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
