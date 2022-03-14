import classNames from 'classnames';
import React from 'react';

import {
  FormInputIntrinsicWidth,
  InputBase,
  rawInputClassNames,
} from '../Input';

import styles from './styles.module.scss';

export interface TextareaProps
  extends InputBase,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  /**
   * @default auto
   */
  intrinsicWidth?: FormInputIntrinsicWidth;

  /**
   * Field name
   */
  name?: string;

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | (() => void);

  /**
   * Apply transparent style
   * @default false
   */
  transparent?: boolean;
}

function Textarea({
  className,
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  transparent = false,
  size = 'md',
  ...rest
}: TextareaProps) {
  return (
    <textarea
      className={classNames(
        styles.component,
        rawInputClassNames({
          errorSeverity,
          hasError,
          intrinsicWidth,
          size,
          transparent,
        }),
        className,
      )}
      {...rest}
    />
  );
}

export { Textarea };
