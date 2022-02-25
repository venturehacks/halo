import classNames from 'classnames';
import React from 'react';

import {
  FormInputIntrinsicWidth,
  RawInputBase,
  rawInputClassNames,
} from '../RawInput';

import styles from './styles.module.scss';

export interface RawTextareaProps
  extends RawInputBase,
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

function RawTextarea({
  className,
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  transparent = false,
  size = 'md',
  ...rest
}: RawTextareaProps) {
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

export { RawTextarea };
