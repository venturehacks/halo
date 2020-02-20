// tslint:disable: no-submodule-imports
import * as headings from 'gatsby-theme-docz/src/components/Headings';
import { Code } from 'gatsby-theme-docz/src/components/Code';
import { Layout } from 'gatsby-theme-docz/src/components/Layout';
import { Playground } from 'gatsby-theme-docz/src/components/Playground';
import { Pre } from 'gatsby-theme-docz/src/components/Pre';
import { Props } from 'gatsby-theme-docz/src/components/Props';

console.log('USING SHADOWED src/components/index.js');

export default {
  ...headings,
  code: Code,
  pre: Pre,
  playground: Playground,
  layout: Layout,
  props: Props,
};
