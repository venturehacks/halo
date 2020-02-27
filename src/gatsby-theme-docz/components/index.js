// tslint:disable: no-submodule-imports
import * as headings from 'gatsby-theme-docz/src/components/Headings';
import { Layout } from 'gatsby-theme-docz/src/components/Layout';
import { Playground } from 'gatsby-theme-docz/src/components/Playground';
import { Pre } from 'gatsby-theme-docz/src/components/Pre';
import { Code } from 'gatsby-theme-docz/src/components/Code';
import { Props } from 'gatsby-theme-docz/src/components/Props';

export default {
  ...headings,
  playground: Playground,
  pre: Pre,
  code: Code,
  layout: Layout,
  props: Props,
};
