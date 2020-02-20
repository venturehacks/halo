import path from 'path';
import merge from 'webpack-merge';

export default {
  debug: true,
  dest: '/docs',
  notUseSpecifiers: true,
  src: path.join(__dirname, 'src'),
  title: 'Halo Design System',
  typescript: true,
  gatsbyRemarkPlugins: [
    {
      resolve: 'gatsby-remark-vscode',
      // OPTIONAL
      options: {
        theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
        injectStyles: true,
      },
    },
  ],
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
