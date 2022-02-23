const path = require('path');
const svgoConfig = require('../../svgo.config.js');
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
        svgoConfig,
        // limit: 4096,
        // iesafe: true,
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
