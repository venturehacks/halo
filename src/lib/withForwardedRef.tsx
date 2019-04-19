import * as React from 'react';

export interface ForwardedRefProps {
  forwardedRef?: React.Ref<any>;
}

function withForwardedRef(WrappedComponent: React.ComponentType<any>) {
  function forwardRef(props: any, ref: React.Ref<any>) {
    return <WrappedComponent {...props} forwardedRef={ref} />;
  }

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `withForwardedRef(${name})`;

  return React.forwardRef(forwardRef);
}

export { withForwardedRef };
