import classNames from 'classnames';
import * as React from 'react';

import { Box } from '../../structure/Box';

import * as styles from './styles.scss';

type IconPosition = 'right' | 'left';

export interface RawInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
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

RawInput.defaultProps = {
  iconPosition: 'left',
  type: 'text',
  transparent: false,
};

export default function RawInput({
  className,
  icon,
  iconPosition,
  transparent,
  type,
  ...rest
}: RawInputProps) {
  const input = (
    <input
      className={classNames(
        styles.component,
        className,
        transparent ? styles.transparent : styles.normal,
        icon && iconPosition === 'right' && styles.hasIconRight,
        icon && iconPosition === 'left' && styles.hasIconLeft,
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
