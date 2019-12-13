import Tippy, { TippyProps } from '@tippy.js/react';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.scss';

/*
 * NOTE: If you want to use a React component as a child,
 * you must forward the ref!
 *
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
 */

function Tooltip({
  arrow = false,
  className,
  distance = 12,
  size = 'small',
  ...rest
}: TippyProps) {
  return (
    <Tippy
      arrow={arrow}
      className={classNames(styles.component, className)}
      distance={distance}
      size={size}
      {...rest}
    />
  );
}

export { Tooltip };
