// https://github.com/svg/svgo/#built-in-plugins

module.exports = {
  js2svg: {
    indent: 2,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertColors: {
            currentColor: true,
          },
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
      name: 'removeRasterImages',
    },
    {
      name: 'removeDimensions', // remove width/height
    },
    {
      name: 'removeScriptElement',
    },
    {
      name: 'removeOffCanvasPaths',
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        className: 'haloIcon w-6 h-6',
      },
    },
    {
      name: 'convertColors',
      params: {
        currentColor: '#385075',
      },
    },
    // {
    //   name: 'removeAttrs',
    //   params: {
    //     attrs: '(fill)',
    //     // attrs: '(fill|stroke)' ,
    //     preserveCurrentColor: true,
    //   },
    // },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ],
};
