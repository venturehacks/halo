import Tippy, { TippyProps } from '@tippyjs/react';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export interface TooltipProps extends TippyProps {
  /**
   * @deprecated `distance` is unsupported since popper@2.x. Use offset instead.
   */
  distance?: never;
  size?: 'sm' | 'md' | 'lg';
}

/*
 * When using a React component as a child,
 * you must forward the ref!
 *
 * @example
 * ```
 * const ThisWillWork = forwardRef((props, ref) => (
 *   <button ref={ref}>Text</button>
 * ));
 *
 * function Foo() {
 *   return (
 *     <Tooltip content="tooltip">
 *       <ThisWillWork />
 *     </Tooltip>
 *   )
 * }
 * ```
 */
function Tooltip({
  arrow = false,
  className,
  distance,
  size = 'md',
  ...rest
}: TooltipProps) {
  return (
    <Tippy
      arrow={arrow}
      className={classNames(styles.component, className, styles[size])}
      {...rest}
    />
  );
}

export { Tooltip };
