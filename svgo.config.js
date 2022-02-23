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
            currentColor: '#385075',
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
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill)',
        // attrs: '(fill|stroke)' ,
        preserveCurrentColor: true,
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ],
};
