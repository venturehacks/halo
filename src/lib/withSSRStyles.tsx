import * as React from 'react';

export interface SSRStylesProps {
  css?: string;
}

function withSSRStyles<OriginalProps extends {}>(
  WrappedComponent: React.ComponentType<OriginalProps>,
) {
  return function SSRStylesComponent(props: OriginalProps, css) {
    const isBrowser = !!(
      (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
    )
    return (
      <WrappedComponent {...props}>
        {isBrowser ? null : <style dangerouslySetInnerHTML={{ __html: css }} />}
      </WrappedComponent>
    );
  }
}

export { withSSRStyles };
