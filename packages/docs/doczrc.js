import path from 'path';

export default {
  title: 'Halo Design System',
  repository: 'https://github.com/venturehacks/halo',
  typescript: true,
  notUseSpecifiers: true,
  debug: true,
  src: '../halo',
  // root: '../../', // usually the pwd (packages/docs)
  // gatsbyRoot: '../halo', // docz will use this for filesystem import instead of `root`
  ignore: [
    'node_modules',
    'server',
    'pages',
    '.next',
    '.cache',
    'coverage',
    '*.js',
    /node_modules/,
    /dist/,
  ],
  docgenConfig: {
    // NOTE(drew): filter out props that come from `node_modules`, such as React.HTMLAttributes<T>, otherwise we get noisy <Props> tables
    propFilter: (props) => {
      // NOTE(drew): nothing in this function will output to console, unfortunately
      if (props.declarations !== undefined && props.declarations.length > 0) {
        const useProps = props.declarations.find((declaration) => {
          const isHalo = declaration.fileName.includes('halo');
          const fromNodeModules = declaration.fileName.includes('node_modules');
          return isHalo || !fromNodeModules;
        });

        return Boolean(useProps);
      }

      if (props.parent) {
        const isHalo = props.parent.fileName.includes('halo');
        const fromNodeModules = props.parent.fileName.includes('node_modules');
        return isHalo || !fromNodeModules;
      }

      return true;
    },
  },
  filterComponents: (files) => {
    // NOTE(drew): Please leave this sanity debug output
    console.log('[Halo] Found source component files:', files);
    const filteredFiles = files.filter((filepath) => {
      const isTest = /\.(test|spec)\.(js|jsx|ts|tsx)$/.test(filepath);
      if (isTest) {
        return false;
      }

      const isComponent =
        /^src\/components\/(core|form|structure)+\/.*\/*\.(ts|tsx)$/.test(
          filepath,
        );

      const isComponentViaAncestor =
        /^\.\.\/halo\/src\/components\/(core|form|structure)+\/.*\/*\.(ts|tsx)$/.test(
          filepath,
        );

      return isComponent || isComponentViaAncestor;
    });

    // NOTE(drew): Please leave this sanity debug output
    console.log('[Halo] Resolved filtered source files:', filteredFiles);
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
