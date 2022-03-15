import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';

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

function RawTextarea({
  className,
  forwardedRef,
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  transparent = false,
  size = 'md',
  ...rest
}: TextareaProps & ForwardedRefProps<HTMLTextAreaElement>) {
  return (
    <textarea
      ref={forwardedRef}
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

const Textarea = withForwardedRef<TextareaProps, HTMLTextAreaElement>(
  RawTextarea,
);

export { Textarea };
