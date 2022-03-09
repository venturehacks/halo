const path = require('path');
const rootDirectory = path.resolve(__dirname, '../..');
const haloDirectory = path.resolve(rootDirectory, 'packages/halo');
const svgoConfig = require('../../svgo.config.js');

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
  // additional explanation: https://github.com/venturehacks/halo/pull/144
  config.module.rules = config.module.rules.map((rule) => {
    if (!rule.test) {
      return rule;
    }

    if (rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
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
        svgo: true,
        svgoConfig, // svgo@1.x configuration format
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
