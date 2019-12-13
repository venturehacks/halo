/**
 * TODO: HoC's break prop forwarding (ugh) and defaultProps
 *       This is nuts. Might as well wait until the community catches up with
 *       a clean solution. All current solutions are messy af.
 *
 * References:
 * - https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 * - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30791
 * - https://github.com/sw-yx/react-typescript-cheatsheet/issues/86
 * - Example (but doesn't work with latest TS):
 *     https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
 *     https://github.com/Hotell/blogposts/blob/master/2018-08/react-ts-refs/src/app/06-forwarding-refs-in-hoc.tsx
 */

import React from 'react';

export interface ForwardedRefProps {
  forwardedRef?: React.Ref<any>;
}

function withForwardedRef<OriginalProps extends {}>(
  WrappedComponent: React.ComponentType<OriginalProps>,
) {
  function forwardRef(props: OriginalProps, ref: React.Ref<OriginalProps>) {
    return <WrappedComponent {...props} forwardedRef={ref} />;
  }

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `withForwardedRef(${name})`;

  return React.forwardRef(forwardRef);
}

export { withForwardedRef };
