export default {
  plain: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#f6f8fa',
    color: '#393A34',
    fontFamily:
      "'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace",
    fontSize: '14px',
    'moz-osx-font-smoothing': 'grayscale',
  },
  styles: [
    {
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
      types: ['comment', 'prolog', 'doctype', 'cdata'],
    },
    {
      style: {
        opacity: 0.7,
      },
      types: ['namespace'],
    },
    {
      style: {
        color: '#e3116c',
      },
      types: ['string', 'attr-value'],
    },
    {
      style: {
        color: '#393A34',
      },
      types: ['punctuation', 'operator'],
    },
    {
      style: {
        color: '#36acaa',
      },
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
    },
    {
      style: {
        color: '#00a4db',
      },
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
    },
    {
      style: {
        color: '#d73a49',
      },
      types: ['function', 'deleted', 'tag'],
    },
    {
      style: {
        color: '#6f42c1',
      },
      types: ['function-variable'],
    },
    {
      style: {
        color: '#00009f',
      },
      types: ['tag', 'selector', 'keyword'],
    },
  ],
};
