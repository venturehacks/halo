// tslint:disable: no-submodule-imports
import * as headings from 'gatsby-theme-docz/src/components/Headings';
import { Layout } from 'gatsby-theme-docz/src/components/Layout';
import { Playground } from 'gatsby-theme-docz/src/components/Playground';
import { Pre } from 'gatsby-theme-docz/src/components/Pre';
import { Props } from 'gatsby-theme-docz/src/components/Props';

export default {
  ...headings,
  playground: Playground,
  pre: Pre,
  layout: Layout,
  props: Props,
};
