// https://github.com/svg/svgo/#built-in-plugins

module.exports = {
  // js2svg: {
  //   indent: 2,
  // },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: 'prefixIds',
      params: {
        prefix: 'halo',
      },
    },
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'removeRasterImages',
    },
    {
      // remove width/height
      name: 'removeDimensions',
    },
    {
      name: 'removeOffCanvasPaths',
    },
    {
      name: 'removeScriptElement',
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        className: 'haloIcon',
      },
    },
  ],
};
