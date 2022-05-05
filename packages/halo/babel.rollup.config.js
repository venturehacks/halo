const presets = [];
const plugins = ['macros'];

module.exports = {
  env: {
    development: {
      presets,
      plugins,
    },
    production: {
      presets,
      plugins,
    },
    test: {
      presets,
      plugins,
    },
  },
};
