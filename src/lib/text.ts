export type TextContrast = 'A' | 'AA' | 'AAA' | 'AAAA';

export interface TextContrastProps {
  contrast?: TextContrast;
  muted?: boolean;
  xmuted?: boolean;
  xxmuted?: boolean;
}

export type TextColorScheme = 'dark' | 'light';

export type TextWeight =
  | 'ultralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold';

export type TextSize =
  | '6xl'
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | '2xs';

export type TextLineHeight = 'default' | 'comfortable' | 'compact' | 'dense';

export function textContrastForConfiguration({
  muted,
  xmuted,
  xxmuted,
  contrast,
}: TextContrastProps): TextContrast {
  if (contrast) return contrast;
  if (xxmuted) return 'A';
  if (xmuted) return 'AA';
  if (muted) return 'AAA';

  return 'AAAA';
}
