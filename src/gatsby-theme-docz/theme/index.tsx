// tslint:disable-next-line: no-submodule-imports
import baseTheme from 'gatsby-theme-docz/src/theme/index';
import { merge } from 'lodash';

export default merge(baseTheme, {
  colors: {
    header: {
      bg: '#f1f2f6',
      text: '#747d8c',
    },
  },
});
