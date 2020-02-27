import path from 'path';
import merge from 'webpack-merge';

export default {
  debug: true,
  notUseSpecifiers: true,
  src: path.join(__dirname, 'src'),
  title: 'Halo Design System',
  typescript: true,
  repository: 'https://github.com/venturehacks/halo',
  docgenConfig: {
    propFilter: prop => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
  },
  filterComponents: files =>
    files.filter(filepath =>
      /components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath),
    ),
  themeConfig: {
    primary: '#0F6FFF',
    showPlaygroundEditor: true,
  },
  menu: [
    'Welcome',
    {
      name: 'Constants',
    },
    {
      name: 'Core',
    },
    {
      name: 'Structure',
      menu: ['Box', 'Grid', 'Cell'],
    },
    {
      name: 'Form',
      menu: [
        'Label',
        'FieldErrorMessage',
        'RawInput',
        'RawCheckbox',
        'RawRadio',
        'RawSelect',
        'RawTextarea',
      ],
    },
    {
      name: 'Sass',
      menu: ['Variables', 'Mixins', 'Functions', 'Breakpoints'],
    },
  ],
};
