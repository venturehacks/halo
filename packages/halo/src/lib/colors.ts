/* eslint-disable sort-keys-fix/sort-keys-fix */
export type Color =
  | 'primary--dark'
  | 'primary--light'
  | 'text-dark--aaaa'
  | 'text-dark--aaa'
  | 'text-dark--aa'
  | 'text-dark--a'
  | 'text-dark--link'
  | 'text-dark--success'
  | 'text-dark--warning'
  | 'text-dark--error'
  | 'text-light--aaaa'
  | 'text-light--aaa'
  | 'text-light--aa'
  | 'text-light--a'
  | 'text-light--link'
  | 'text-light--success'
  | 'text-light--warning'
  | 'text-light--error'
  | 'slate--900'
  | 'slate--800'
  | 'slate--700'
  | 'slate--600'
  | 'slate--500'
  | 'slate--400'
  | 'slate--300'
  | 'slate--200'
  | 'slate--100'
  | 'blue--900'
  | 'blue--800'
  | 'blue--700'
  | 'blue--600'
  | 'blue--500'
  | 'blue--400'
  | 'blue--300'
  | 'blue--200'
  | 'blue--100'
  | 'green--900'
  | 'green--800'
  | 'green--700'
  | 'green--600'
  | 'green--500'
  | 'green--400'
  | 'green--300'
  | 'green--200'
  | 'green--100'
  | 'red--900'
  | 'red--800'
  | 'red--700'
  | 'red--600'
  | 'red--500'
  | 'red--400'
  | 'red--300'
  | 'red--200'
  | 'red--100'
  | 'purple--900'
  | 'purple--800'
  | 'purple--700'
  | 'purple--600'
  | 'purple--500'
  | 'purple--400'
  | 'purple--300'
  | 'purple--200'
  | 'purple--100'
  | 'orange--900'
  | 'orange--800'
  | 'orange--700'
  | 'orange--600'
  | 'orange--500'
  | 'orange--400'
  | 'orange--300'
  | 'orange--200'
  | 'orange--100';

export const ColorPalette: Record<Color, string> = {
  // dark text on light background
  'primary--dark': '#0f6fff',
  'text-dark--aaaa': '#050c26',
  'text-dark--aaa': '#525769',
  'text-dark--aa': '#717584',
  'text-dark--a': '#9194a0',
  'text-dark--link': '#0a6cff',
  'text-dark--success': '#008562',
  'text-dark--warning': '#ac6600',
  'text-dark--error': '#cc033e',

  // light text on dark background
  'primary--light': '#1a75ff',
  'text-light--aaaa': '#fff',
  'text-light--aaa': '#9b9da8',
  'text-light--aa': '#777b89',
  'text-light--a': '#5a5e70',
  'text-light--link': '#1a75ff',
  'text-light--success': '#009c5e',
  'text-light--warning': '#c56e09',
  'text-light--error': '#ee2531',

  // SPECTRUM
  // slate
  'slate--900': '#050c26',
  'slate--800': '#162040',
  'slate--700': '#385075',
  'slate--600': '#576f92',
  'slate--500': '#7b91b1',
  'slate--400': '#acbdd5',
  'slate--300': '#d2d9e5',
  'slate--200': '#e4e7f0',
  'slate--100': '#f2f4f7',

  // blue
  'blue--900': '#000649',
  'blue--800': '#001366',
  'blue--700': '#0029b0',
  'blue--600': '#0059de',
  'blue--500': '#0f6fff',
  'blue--400': '#268bff',
  'blue--300': '#85beff',
  'blue--200': '#dde9f8',
  'blue--100': '#f2f8ff',

  // green
  'green--900': '#003520',
  'green--800': '#004328',
  'green--700': '#005a37',
  'green--600': '#008953',
  'green--500': '#009c5e',
  'green--400': '#00a880',
  'green--300': '#00cc96',
  'green--200': '#b7ecde',
  'green--100': '#e1faf3',

  // red
  'red--900': '#4d001d',
  'red--800': '#a00038',
  'red--700': '#cc033e',
  'red--600': '#e9304b',
  'red--500': '#f2555f',
  'red--400': '#f56671',
  'red--300': '#fb868e',
  'red--200': '#ffdce0',
  'red--100': '#fff1f3',

  // purple
  'purple--900': '#220061',
  'purple--800': '#311094',
  'purple--700': '#4039a8',
  'purple--600': '#5646be',
  'purple--500': '#7956bf',
  'purple--400': '#9875de',
  'purple--300': '#b99ae9',
  'purple--200': '#dbc0f8',
  'purple--100': '#f8f1ff',

  // orange
  'orange--900': '#4e2400',
  'orange--800': '#914404',
  'orange--700': '#b35a04',
  'orange--600': '#c56e09',
  'orange--500': '#cb7d0e',
  'orange--400': '#f2a73d',
  'orange--300': '#e9b44f',
  'orange--200': '#fce79b',
  'orange--100': '#fff9e7',
};
