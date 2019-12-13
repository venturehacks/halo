import React from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';

export type LoadingIndicatorProps = LoadingIndicatorPrimaryVariantProps &
  LoadingIndicatorAlternateVariantProps;

interface LoadingIndicatorCommonProps {
  /**
   * Shorthand for setting variant="alternate"
   */
  alternate?: boolean;
  color?: string;
  css?: string | PrecompiledCss;
  /**
   * @default true
   */
  loading?: boolean;
}

export interface LoadingIndicatorPrimaryVariantProps
  extends LoadingIndicatorCommonProps {
  margin?: string;
  radius?: number;
  radiusUnit?: string;
  variant: 'primary';
}

export interface LoadingIndicatorAlternateVariantProps
  extends LoadingIndicatorCommonProps {
  size?: number;
  sizeUnit?: string;
  variant: 'alternate';
}

interface PrecompiledCss {
  name: string;
  styles: string;
}

LoadingIndicator.defaultProps = {
  color: '#0F6FFF',
  size: 34,
  variant: 'primary',
};

function LoadingIndicator({
  alternate,
  variant,
  ...props
}: LoadingIndicatorProps) {
  if (alternate || variant === 'alternate') {
    return <ClipLoader {...props} />;
  }

  return <ScaleLoader {...props} />;
}

export { LoadingIndicator };
