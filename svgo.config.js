// https://github.com/svg/svgo/#built-in-plugins

// NOTE(drew): svgo@1.x config format!!
// https://github.com/svg/svgo/tree/v1.3.2
// https://github.com/venturehacks/halo/pull/144
module.exports = {
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
        className: 'haloIcon w-6 max-w-full',
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
        attributes: ['fill="currentColor"'],
      },
    },
  ],
};
