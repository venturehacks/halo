import classNames from 'classnames';
import React from 'react';

import {
  FORM_FIELD_ERROR_IDENTIFIER,
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib';
import { Box } from '../../structure/Box';

import styles from './styles.scss';

type IconPosition = 'right' | 'left';

export interface RawInputProps {
  className?: string;

  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this
   * @default warning
   */
  errorSeverity?: 'warning' | 'critical';
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
  iconPosition?: IconPosition;

  /**
   * Grows as wide as container by default
   * @default 100%
   */
  intrinsicWidth?: 'auto' | '100%';

  /**
   * Field name
   */
  name?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => void);

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

function RawInputRaw({
  className,
  errorSeverity = 'warning',
  forwardedRef,
  hasError = false,
  icon,
  iconContainerClassName,
  iconPosition = 'left',
  intrinsicWidth = '100%',
  transparent = false,
  type = 'text',
  ...rest
}: RawInputProps &
  ForwardedRefProps<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement>) {
  const input = (
    <input
      ref={forwardedRef}
      className={classNames(
        styles.component,
        className,
        transparent ? styles.transparent : styles.bordered,
        icon && iconPosition === 'right' && styles.hasIconRight,
        icon && iconPosition === 'left' && styles.hasIconLeft,
        intrinsicWidth === 'auto' && styles.widthAuto,
        hasError && styles.hasError,
        hasError && FORM_FIELD_ERROR_IDENTIFIER,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.critical,
      )}
      type={type}
      {...rest}
    />
  );

  if (!icon) {
    return input;
  }

  return (
    <div className={styles.wrapper}>
      {input}
      <Box
        align="center"
        className={classNames(
          styles.iconContainer,
          iconPosition === 'right' && styles.hasIconRight,
          iconContainerClassName,
        )}
        valign="center"
        column
      >
        {icon}
      </Box>
    </div>
  );
}

// NOTE(drew): I wonder if we need to go back to `extends ...`
const RawInput = withForwardedRef<
  RawInputProps & React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>(RawInputRaw);

export { RawInput };
