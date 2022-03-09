import { toTheme } from '@theme-ui/typography';
import baseTheme from 'gatsby-theme-docz/src/theme/index';
import { merge } from 'lodash';
import githubTheme from 'typography-theme-github';

// import palenightTheme from './prism/palenight';
import github from './prism/github';

const typography = toTheme(githubTheme);

export default merge(baseTheme, typography, {
  colors: {
    header: {
      bg: '#f1f2f6',
      text: '#747d8c',
    },
  },
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 600,
  },
  prism: {
    light: github,
  },
});
