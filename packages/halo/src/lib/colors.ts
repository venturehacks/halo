export type Color =
  | 'dark-brand'
  | 'dark-aaaa'
  | 'dark-aaa'
  | 'dark-aa'
  | 'dark-a'
  | 'dark-link'
  | 'dark-success'
  | 'dark-warning'
  | 'dark-error'
  | 'light-brand'
  | 'light-aaaa'
  | 'light-aaa'
  | 'light-aa'
  | 'light-a'
  | 'light-link'
  | 'light-success'
  | 'light-warning'
  | 'light-error'
  | 'slate-900'
  | 'slate-800'
  | 'slate-700'
  | 'slate-600'
  | 'slate-500'
  | 'slate-400'
  | 'slate-300'
  | 'slate-200'
  | 'slate-100'
  | 'blue-900'
  | 'blue-800'
  | 'blue-700'
  | 'blue-600'
  | 'blue-500'
  | 'blue-400'
  | 'blue-300'
  | 'blue-200'
  | 'blue-100'
  | 'green-900'
  | 'green-800'
  | 'green-700'
  | 'green-600'
  | 'green-500'
  | 'green-400'
  | 'green-300'
  | 'green-200'
  | 'green-100'
  | 'red-900'
  | 'red-800'
  | 'red-700'
  | 'red-600'
  | 'red-500'
  | 'red-400'
  | 'red-300'
  | 'red-200'
  | 'red-100'
  | 'purple-900'
  | 'purple-800'
  | 'purple-700'
  | 'purple-600'
  | 'purple-500'
  | 'purple-400'
  | 'purple-300'
  | 'purple-200'
  | 'purple-100'
  | 'orange-900'
  | 'orange-800'
  | 'orange-700'
  | 'orange-600'
  | 'orange-500'
  | 'orange-400'
  | 'orange-300'
  | 'orange-200'
  | 'orange-100'
  // GTM
  | 'gtmblue-800'
  | 'gtmblue-700'
  | 'gtmblue-600'
  | 'gtmblue-500'
  | 'gtmblue-400'
  | 'gtmblue-300'
  | 'gtmblue-200'
  | 'gtmblue-100'
  | 'gtmgreen-800'
  | 'gtmgreen-700'
  | 'gtmgreen-600'
  | 'gtmgreen-500'
  | 'gtmgreen-400'
  | 'gtmgreen-300'
  | 'gtmgreen-200'
  | 'gtmgreen-100'
  | 'gtmorange-800'
  | 'gtmorange-700'
  | 'gtmorange-600'
  | 'gtmorange-500'
  | 'gtmorange-400'
  | 'gtmorange-300'
  | 'gtmorange-200'
  | 'gtmorange-100'
  | 'gtmpink-800'
  | 'gtmpink-700'
  | 'gtmpink-600'
  | 'gtmpink-500'
  | 'gtmpink-400'
  | 'gtmpink-300'
  | 'gtmpink-200'
  | 'gtmpink-100'
  | 'gtmyellow-800'
  | 'gtmyellow-700'
  | 'gtmyellow-600'
  | 'gtmyellow-500'
  | 'gtmyellow-400'
  | 'gtmyellow-300'
  | 'gtmyellow-200'
  | 'gtmyellow-100'
  | 'gray-800'
  | 'gray-700'
  | 'gray-600'
  | 'gray-500'
  | 'gray-400'
  | 'gray-300'
  | 'gray-200'
  | 'gray-100';

export const ColorPalette: Record<Color, string> = {
  // dark text on light background
  'dark-brand': '#0f6fff',
  'dark-aaaa': '#050c26',
  'dark-aaa': '#525769',
  'dark-aa': '#717584',
  'dark-a': '#9194a0',
  'dark-link': '#0a6cff',
  'dark-success': '#008562',
  'dark-warning': '#ac6600',
  'dark-error': '#cc033e',

  // light text on dark background
  'light-brand': '#1a75ff',
  'light-aaaa': '#fff',
  'light-aaa': '#9b9da8',
  'light-aa': '#777b89',
  'light-a': '#5a5e70',
  'light-link': '#1a75ff',
  'light-success': '#009c5e',
  'light-warning': '#c56e09',
  'light-error': '#ee2531',

  // SPECTRUM
  // slate
  'slate-900': '#050c26',
  'slate-800': '#162040',
  'slate-700': '#385075',
  'slate-600': '#576f92',
  'slate-500': '#7b91b1',
  'slate-400': '#acbdd5',
  'slate-300': '#d2d9e5',
  'slate-200': '#e4e7f0',
  'slate-100': '#f2f4f7',

  // blue
  'blue-900': '#000649',
  'blue-800': '#001366',
  'blue-700': '#0029b0',
  'blue-600': '#0059de',
  'blue-500': '#0f6fff',
  'blue-400': '#268bff',
  'blue-300': '#85beff',
  'blue-200': '#dde9f8',
  'blue-100': '#f2f8ff',

  // green
  'green-900': '#003520',
  'green-800': '#004328',
  'green-700': '#005a37',
  'green-600': '#008953',
  'green-500': '#009c5e',
  'green-400': '#00a880',
  'green-300': '#00cc96',
  'green-200': '#b7ecde',
  'green-100': '#e1faf3',

  // red
  'red-900': '#4d001d',
  'red-800': '#a00038',
  'red-700': '#cc033e',
  'red-600': '#e9304b',
  'red-500': '#f2555f',
  'red-400': '#f56671',
  'red-300': '#fb868e',
  'red-200': '#ffdce0',
  'red-100': '#fff1f3',

  // purple
  'purple-900': '#220061',
  'purple-800': '#311094',
  'purple-700': '#4039a8',
  'purple-600': '#5646be',
  'purple-500': '#7956bf',
  'purple-400': '#9875de',
  'purple-300': '#b99ae9',
  'purple-200': '#dbc0f8',
  'purple-100': '#f8f1ff',

  // orange
  'orange-900': '#4e2400',
  'orange-800': '#914404',
  'orange-700': '#b35a04',
  'orange-600': '#c56e09',
  'orange-500': '#cb7d0e',
  'orange-400': '#f2a73d',
  'orange-300': '#e9b44f',
  'orange-200': '#fce79b',
  'orange-100': '#fff9e7',

  // GTM (2022)
  'gtmblue-800': '#01134B',
  'gtmblue-700': '#052077',
  'gtmblue-600': '#062AA0',
  'gtmblue-500': '#143FCD',
  'gtmblue-400': '#3A45D4',
  'gtmblue-300': '#6670F5',
  'gtmblue-200': '#B0B5FD',
  'gtmblue-100': '#EAEBFF',

  'gtmgreen-800': '#002911',
  'gtmgreen-700': '#00431B',
  'gtmgreen-600': '#005A24',
  'gtmgreen-500': '#0C7134',
  'gtmgreen-400': '#229651',
  'gtmgreen-300': '#67CC90',
  'gtmgreen-200': '#B4ECCA',
  'gtmgreen-100': '#E0F9EA',

  'gtmorange-800': '#790700',
  'gtmorange-700': '#A82901',
  'gtmorange-600': '#D3450B',
  'gtmorange-500': '#F0591C',
  'gtmorange-400': '#EF7B46',
  'gtmorange-300': '#FFAA83',
  'gtmorange-200': '#FFD3BF',
  'gtmorange-100': '#FFEDE5',

  'gtmpink-800': '#80112C',
  'gtmpink-700': '#AB2344',
  'gtmpink-600': '#D44266',
  'gtmpink-500': '#F47C9A',
  'gtmpink-400': '#F595A5',
  'gtmpink-300': '#FFC1CC',
  'gtmpink-200': '#FFDEE3',
  'gtmpink-100': '#FFF1F3',

  'gtmyellow-800': '#9F5600',
  'gtmyellow-700': '#CE7C00',
  'gtmyellow-600': '#EAA903',
  'gtmyellow-500': '#F8BE14',
  'gtmyellow-400': '#F4C63D',
  'gtmyellow-300': '#FEDD7C',
  'gtmyellow-200': '#FFEBAF',
  'gtmyellow-100': '#FFF5D8',

  'gray-800': '#616161',
  'gray-700': '#757575',
  'gray-600': '#9E9E9E',
  'gray-500': '#BDBDBD',
  'gray-400': '#E0E0E0',
  'gray-300': '#EEEEEE',
  'gray-200': '#F5F5F5',
  'gray-100': '#FAFAFA',
};
