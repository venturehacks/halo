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

  // Halo module icons
  // + svg is located in icons directory
  // + SVGO optimized with config
  // + include icon in package publish
  config.module.rules.push({
    // *not preceeded* by "vendor-support"
    test: /(?<!vendor-support)\/[A-Za-z0-9]+\.svg$/,
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

  // Documentation site vendor icons
  // + svg is located in icons/vendor-icons
  // + skip SVGO
  // + do not include in package publish
  config.module.rules.push({
    // *preceded* by "vendor-support"
    test: /(?<=vendor-support)\/[A-Za-z0-9]+\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: { svgo: false },
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
