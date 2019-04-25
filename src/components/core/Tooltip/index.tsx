import Tippy, { TippyProps } from '@tippy.js/react';
import * as React from 'react';

import styles from './styles.scss';

/*
 * NOTE: If you want to use a component element as a child, ensure you forward
 * the ref to the DOM node:
 *
 * import React, { forwardRef } from 'react'
 *
 * const ThisWillWork = forwardRef((props, ref) => (
 *   <button ref={ref}>Text</button>
 * ));
 *
 * function Foo() {
 *   return (
 *     <Tippy content="tooltip">
 *       <ThisWillWork />
 *     </Tippy>
 *   )
 * }
 */

Tooltip.defaultProps = {
  ...Tippy.defaultProps,
  className: styles.component,
  arrow: true,
  size: 'small',
};

function Tooltip(props: TippyProps) {
  return <Tippy {...props} />;
}

export { Tooltip };
