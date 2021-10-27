import React from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';
// tslint:disable-next-line: no-submodule-imports
import { CommonProps } from 'react-spinners/interfaces';

import styles from './styles.scss';

export type LoadingIndicatorProps = LoadingIndicatorPrimaryVariantProps &
  LoadingIndicatorAlternateVariantProps;

interface LoadingIndicatorCommonProps extends CommonProps {
  /**
   * Shorthand for setting variant="alternate"
   */
  alternate?: boolean;
  bare?: boolean;
  color?: string;
  css?: string | PrecompiledCss;
  /**
   * @default true
   */
  loading?: boolean;
  variant?: 'primary' | 'alternate';
}

export interface LoadingIndicatorPrimaryVariantProps
  extends LoadingIndicatorCommonProps {
  margin?: string;
  radius?: number;
  radiusUnit?: string;
}

export interface LoadingIndicatorAlternateVariantProps
  extends LoadingIndicatorCommonProps {
  size?: number;
  sizeUnit?: string;
}

interface PrecompiledCss {
  name: string;
  styles: string;
}

LoadingIndicator.defaultProps = {
  bare: false,
  color: '#0F6FFF',
  size: 34,
  variant: 'primary',
};

function LoadingIndicator({
  alternate,
  variant,
  ...props
}: LoadingIndicatorProps) {
  const { bare } = props;

  const Component =
    alternate || variant === 'alternate' ? ClipLoader : ScaleLoader;

  // @ts-ignore
  const indicator = React.createElement(Component, props);

  if (bare) {
    return indicator;
  }

  return <div className={styles.component}>{indicator}</div>;
}

export { LoadingIndicator };
