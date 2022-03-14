import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';

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

function RawTextareaRaw({
  className,
  forwardedRef,
  intrinsicWidth = 'auto',
  hasError = false,
  errorSeverity = 'warning',
  transparent = false,
  size = 'md',
  ...rest
}: RawTextareaProps & ForwardedRefProps<HTMLTextAreaElement>) {
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

const RawTextarea = withForwardedRef<RawTextareaProps, HTMLTextAreaElement>(
  RawTextareaRaw,
);

export { RawTextarea };
