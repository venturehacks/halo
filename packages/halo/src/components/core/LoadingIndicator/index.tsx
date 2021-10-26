import React from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';

import styles from './styles.scss';

export type LoadingIndicatorProps = LoadingIndicatorPrimaryVariantProps &
  LoadingIndicatorAlternateVariantProps;

interface LoadingIndicatorCommonProps {
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

function LoadingIndicator(props: LoadingIndicatorProps) {
  const { bare } = props;
  const Component = getComponent(props);

  const indicator = <Component {...props} />;

  if (bare) {
    return indicator;
  }

  return <div className={styles.component}>{indicator}</div>;
}

function getComponent({
  alternate,
  variant,
}: LoadingIndicatorProps): React.ComponentType {
  if (alternate || variant === 'alternate') {
    return ClipLoader;
  }

  return ScaleLoader;
}

export { LoadingIndicator };
