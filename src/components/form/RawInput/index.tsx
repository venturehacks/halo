import classNames from 'classnames';
import * as React from 'react';

import { Box } from '../../structure/Box';

import * as styles from './styles.scss';

type IconPosition = 'right' | 'left';

export interface RawInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Outline element in red
   * @default false
   */
  hasError?: boolean;
  errorSeverity?: 'warning' | 'critical';
  /**
   * Optional prefix/suffix icon
   */
  icon?: React.ReactNode;
  /**
   * left | right
   * @default left
   */
  iconPosition?: IconPosition;
  /**
   * @default 100%
   */
  intrinsicWidth?: 'auto' | '100%';
  /**
   * Use transparent style
   * @default false
   */
  transparent?: boolean;

  /**
   * Standard HTML <input> element types.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
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

export default function RawInput({
  className,
  errorSeverity = 'warning',
  hasError = false,
  icon,
  iconPosition = 'left',
  intrinsicWidth = 'auto',
  transparent = false,
  type = 'text',
  ...rest
}: RawInputProps) {
  const input = (
    <input
      className={classNames(
        styles.component,
        className,
        transparent ? styles.transparent : styles.bordered,
        icon && iconPosition === 'right' && styles.hasIconRight,
        icon && iconPosition === 'left' && styles.hasIconLeft,
        intrinsicWidth === 'auto' && styles.widthAuto,
        hasError && styles.hasError,
        errorSeverity === 'warning' && styles.warning,
        errorSeverity === 'critical' && styles.error,
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
        valign="center"
        align="center"
        className={classNames(
          styles.iconContainer,
          iconPosition === 'right' && styles.hasIconRight,
        )}
      >
        {icon}
      </Box>
    </div>
  );
}

export { RawInput };
