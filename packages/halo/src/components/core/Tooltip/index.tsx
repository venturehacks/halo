import Tippy, { TippyProps } from '@tippyjs/react';
import classNames from 'classnames';
import React from 'react';

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
  const classes = classNames(
    className,
    size === 'sm' && 'text-2xs',
    size === 'md' && 'text-xs',
    size === 'lg' && 'text-md',
    'bg-slate-900',
    'py-1 px-2',
    'rounded',
    'text-white',
  );

  return <Tippy arrow={arrow} className={classes} {...rest} />;
}

export { Tooltip };
