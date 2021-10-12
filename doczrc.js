import path from 'path';
import merge from 'webpack-merge';

export default {
  debug: true,
  notUseSpecifiers: true,
  src: path.join(__dirname, 'src'),
  title: 'Halo Design System',
  typescript: true,
  repository: 'https://github.com/venturehacks/halo',
  ignore: [
    'node_modules',
    'node_modules/**/*',
    'server',
    'pages',
    '.next',
    '.cache',
    'coverage',
  ],
  docgenConfig: {
    propFilter: props => {
      // NOTE(drew): hrm, I cannot seem to get this output in console
      // console.log({ prop: props, component });
      if (props.declarations !== undefined && props.declarations.length > 0) {
        const hasPropAdditionalDescription = props.declarations.find(
          declaration => {
            return !declaration.fileName.includes('node_modules');
          },
        );

        return Boolean(hasPropAdditionalDescription);
      }

      if (props.parent) {
        return !props.parent.fileName.includes('node_modules');
      }

      return true;
    },
  },
  filterComponents: files => {
    const filteredFiles = files.filter(filepath => {
      const isTest = /\.(test|spec)\.(js|jsx|ts|tsx)$/.test(filepath);
      if (isTest) {
        return false;
      }

      const isComponent = /^src\/components\/(core|form|structure)+\/.*\/*\.(ts|tsx)$/.test(
        filepath,
      );

      return isComponent;
    });

    console.log('[Halo] resolved source files:');
    console.log(filteredFiles);
    return filteredFiles;
  },
  themeConfig: {
    primary: '#0F6FFF',
    showPlaygroundEditor: true,
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  menu: [
    'Welcome',
    {
      name: 'Guides',
      menu: ['Typography', 'Color'],
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
