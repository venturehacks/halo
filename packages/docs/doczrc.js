import path from 'path';

export default {
  title: 'Halo Design System',
  repository: 'https://github.com/venturehacks/halo',
  typescript: true,
  notUseSpecifiers: true,
  debug: true,
  src: '../halo',
  // gatsbyRoot: '../halo',
  ignore: ['node_modules', 'server', 'pages', '.next', '.cache', 'coverage'],
  docgenConfig: {
    propFilter: props => {
      // NOTE(drew): hrm, I cannot seem to get this output in console
      // console.log({ prop: props, component });
      if (props.declarations !== undefined && props.declarations.length > 0) {
        const useProps = props.declarations.find(declaration => {
          console.log('declaration:', declaration);
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
  filterComponents: files => {
    console.log('[Halo] Found source component files:', files);
    const filteredFiles = files.filter(filepath => {
      const isTest = /\.(test|spec)\.(js|jsx|ts|tsx)$/.test(filepath);
      if (isTest) {
        return false;
      }

      const isComponent = /^src\/components\/(core|form|structure)+\/.*\/*\.(ts|tsx)$/.test(
        filepath,
      );

      const isComponentViaAncestor = /^\.\.\/halo\/src\/components\/(core|form|structure)+\/.*\/*\.(ts|tsx)$/.test(
        filepath,
      );

      return isComponent || isComponentViaAncestor;
    });

    console.log('[Halo] Resolved filtered source files:');
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
