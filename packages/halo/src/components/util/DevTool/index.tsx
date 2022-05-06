/* eslint-disable no-console */
import classNames from 'classnames';
import { compact } from 'lodash';
import React from 'react';
import { useLocalExperiment } from '~/components/util/LocalExperimentContext';

import styles from './styles.module.scss';

interface WithDevToolOptions {
  path: string;
}

function withDevTool<OriginalProps, RefElement = HTMLElement>(
  WrappedComponent: React.ComponentType<OriginalProps>,
  options: WithDevToolOptions,
) {
  console.log({ options });
  const { path } = options;
  const chunks = compact(path.split('/'));
  const componentName = chunks.pop();

  function WithDevToolComponent(
    props: OriginalProps,
    ref: React.Ref<RefElement>,
  ) {
    const { componentIdentify } = useLocalExperiment();

    const component = <WrappedComponent {...props} forwardedRef={ref} />;

    // if (componentIdentify) {
    if (true) {
      return (
        <a
          className={classNames(
            styles.component,
            'block rounded ring-2 ring-green-500 ring-opacity-100 ring-offset-2',
          )}
          data-halo-component={`${componentName}`}
          href={`https://halo-design-system.netlify.app/core/${componentName?.toLowerCase()}`}
          target="_blank"
        >
          {component}
        </a>
      );
    }

    return component;
  }

  WithDevToolComponent.displayName = `WithDevTool(${componentName})`;

  return React.forwardRef(WithDevToolComponent);
}

export { withDevTool };
