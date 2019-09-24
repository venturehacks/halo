import classNames from 'classnames';
import * as React from 'react';

import { FORM_FIELD_ERROR_IDENTIFIER } from '../../../lib';
import { Box } from '../../structure/Box';

import * as styles from './styles.scss';

type IconPosition = 'right' | 'left';

export interface RawInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * Call out element that needs attention
   * @default false
   */
  hasError?: boolean;
  /**
   * Since the most common callout is for validation errors, you shouldn't need to customize this
   * @default warning
   */
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
   * Grows as wide as container by default
   * @default 100%
   */
  intrinsicWidth?: 'auto' | '100%';
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

export default function RawInput({
  className,
  errorSeverity = 'warning',
  hasError = false,
  icon,
  iconPosition = 'left',
  intrinsicWidth = '100%',
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
