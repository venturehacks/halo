export type TextContrast = 'A' | 'AA' | 'AAA' | 'AAAA';

export type TextColorScheme = 'dark' | 'light';

export type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export type TextSize =
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

export interface TextContrastProps {
  colorScheme?: TextColorScheme;
  contrast?: TextContrast;
  muted?: boolean;
  xmuted?: boolean;
  xxmuted?: boolean;
}

// TODO(drew): force inclusion of these rules so we can remove
// these conditional expressions (save kb)
export function textContrastForConfiguration({
  muted,
  xmuted,
  xxmuted,
  contrast,
  colorScheme = 'dark',
}: TextContrastProps) {
  if (colorScheme === 'dark') {
    if (contrast) return `text-dark-${contrast.toLowerCase()}`;
    if (xxmuted) return 'text-dark-a';
    if (xmuted) return 'text-dark-aa';
    if (muted) return 'text-dark-aaa';
    return 'text-dark-aaaa';
  }

  if (contrast) return `text-light-${contrast.toLowerCase()}`;
  if (xxmuted) return 'text-light-a';
  if (xmuted) return 'text-light-aa';
  if (muted) return 'text-light-aaa';
  return 'text-light-aaaa';
}
