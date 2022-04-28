import classNames from 'classnames';
import React from 'react';

import {
  FORM_FIELD_ERROR_IDENTIFIER,
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib';

export type FormInputIconPosition = 'right' | 'left';
export type FormInputErrorSeverity = 'warning' | 'critical';
export type FormInputIntrinsicWidth = 'auto' | '100%';
export type FormInputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;

  /**
   * Validation error = warning
   * Server error = critical
   * @default warning
   */
  errorSeverity?: FormInputErrorSeverity;
  /**
   * Call out element that needs attention
   * @default false
   */
  hasError?: boolean;

  /**
   * Optional prefix/suffix icon
   */
  icon?: React.ReactNode;

  /**
   * className applied to icon container div
   */
  iconContainerClassName?: string;

  /**
   * left | right
   * @default left
   */
  iconPosition?: FormInputIconPosition;

  /**
   * Grows as wide as container by default
   * @default 100%
   */
  intrinsicWidth?: FormInputIntrinsicWidth;

  /**
   * Field name
   */
  name?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => void);

  /**
   * Magnitude of input field
   * @default md
   */
  size?: FormInputSize;
  /**
   * Use transparent style
   * @default false
   */
  transparent?: boolean;
  /**
   * Standard HTML <input> element types
   * @default text
   */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
}

export const inputBaseClasses =
  'text-dark-aaaa text-md max-w-full placeholder-dark-a';

function InputRaw({
  className,
  errorSeverity = 'warning',
  forwardedRef,
  hasError = false,
  icon,
  iconContainerClassName,
  iconPosition = 'left',
  intrinsicWidth = '100%',
  size = 'md',
  transparent = false,
  type = 'text',
  ...rest
}: InputProps & ForwardedRefProps<HTMLInputElement>) {
  const input = (
    <input
      ref={forwardedRef}
      className={classNames(
        rawInputClassNames({
          errorSeverity,
          hasError,
          intrinsicWidth,
          size,
          transparent,
        }),
        // allow space for icon
        icon && iconPosition === 'left' && size === 'sm' && 'pl-9',
        icon && iconPosition === 'left' && size === 'md' && 'pl-11',
        icon && iconPosition === 'left' && size === 'lg' && 'pl-14',
        icon && iconPosition === 'right' && 'pr-11',
        className,
      )}
      type={type}
      {...rest}
    />
  );

  if (!icon) {
    return input;
  }

  return (
    <div className="relative w-full">
      {input}
      <div
        className={classNames(
          size === 'sm' && ' h-5 w-5',
          size === 'md' && ' h-7 w-7',
          size === 'lg' && 'h-9 w-9',
          'text-dark-a top-1.5 rounded-md bg-blue-100',
          'flex flex-col items-center justify-center',
          'absolute',
          iconPosition === 'left' && 'left-2',
          iconPosition === 'right' && 'right-2',
          iconContainerClassName,
        )}
      >
        {icon}
      </div>
    </div>
  );
}

const Input = withForwardedRef<InputProps, HTMLInputElement>(InputRaw);
Input.displayName = 'Input';

export interface InputBase {
  /**
   * Validation error = warning
   * Server error = critical
   * @default warning
   */
  errorSeverity?: FormInputErrorSeverity;
  /**
   * Truthy value indicates an error is present on this field.
   */
  hasError?: boolean;
  intrinsicWidth?: FormInputIntrinsicWidth;
  /**
   * Magnitude of input field
   * @default md
   */
  size?: FormInputSize;
  /**
   * Apply transparent style
   * @default false
   */
  transparent?: boolean;
}

function rawInputClassNames({
  errorSeverity,
  hasError,
  intrinsicWidth,
  size,
  transparent,
}: InputBase = {}) {
  return classNames(
    'text-dark-aaaa text-md max-w-full placeholder-dark-a',
    transparent
      ? 'bg-transparent shadow-none outline-none'
      : 'bg-white rounded focus:border-2',
    size === 'sm' && 'px-3 py-1 h-8',
    size === 'md' && 'px-3 py-2 h-10',
    size === 'lg' && 'p-3  h-12',
    !hasError && transparent && 'border-none',
    !hasError && !transparent && 'border border-gray-500',
    // disabled
    'disabled:text-dark-a disabled:bg-gray-200 disabled:border-light-aa',
    // warning
    hasError && errorSeverity === 'warning' && 'border-dark-warning border-2',
    // error
    hasError && errorSeverity === 'critical' && 'border-dark-error border-2',
    hasError && FORM_FIELD_ERROR_IDENTIFIER,
    // width behavior
    intrinsicWidth === 'auto' && 'w-auto',
    intrinsicWidth === '100%' && 'w-full',
  );
}

export { Input, rawInputClassNames };
