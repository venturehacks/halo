const path = require('path');
const rootDirectory = path.resolve(__dirname, '../..');
const haloDirectory = path.resolve(rootDirectory, 'packages/halo');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  const config = getConfig();

  // remove `.svg` extension handler from all gatsby webpack
  // loaders so that we can inject one true loader: @svgr/webpack
  config.module.rules = config.module.rules.map(rule => {
    if (!rule.test) {
      return rule;
    }

    if (rule.test.toString().includes('svg')) {
      const test = rule.test
        .toString()
        .replace('svg|', '')
        .replace(/\//g, '');
      return { ...rule, test: new RegExp(test) };
    } else {
      return rule;
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: {
        // NOTE(drew): loader uses svgo@1.x,
        // whereas everywhere else we use svgo@2.x
        // 2.x introduced a different config file
        // format, so we cannot use svgo.config.js
        // as is. Thanksfully, we don't 100% need
        // SVGO on the documentation site. The SVGs
        // load, look OK, and use currentColor.
        svgo: true,
        // svgo@1.x configuration format
        svgoConfig: {
          plugins: [
            {
              removeViewBox: false,
            },
            {
              prefixIds: {
                prefix: 'halo',
              },
            },
            {
              removeRasterImages: true,
            },

            {
              removeDimensions: true,
            },
            {
              removeScriptElement: true,
            },
            {
              removeOffCanvasPaths: true,
            },
            {
              addClassesToSVGElement: {
                className: 'haloIcon w-6 h-6',
              },
            },
            {
              convertColors: {
                currentColor: '#385075',
              },
            },
            // {
            //   removeAttrs: {
            //     preserveCurrentColor: true,
            //     attrs: '(fill|stroke)'
            //   }
            // },
            {
              addAttributesToSVGElement: {
                attributes: {
                  fill: 'currentColor',
                },
              },
            },
          ],
        },
      },
    },
    include: [path.resolve(haloDirectory, 'src')],
    exclude: /node_modules/,
  });

  // for debugging:
  // config.module.rules.map(item => {
  //   const { test } = item;
  //   if (test) {
  //     console.log(test.toString());
  //   }
  // });
  // console.log(JSON.stringify(config, null, 2));

  actions.replaceWebpackConfig(config);
};
