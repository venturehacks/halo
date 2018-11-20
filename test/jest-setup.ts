const globalLoose: any = global;

import * as _ from 'lodash';
globalLoose._ = _;

import * as React from 'react';
globalLoose.React = React;

import * as PropTypes from 'prop-types';
globalLoose.PropTypes = PropTypes;

import {
  configure,
  shallow,
  render,
  mount
} from 'enzyme';

globalLoose.shallow = shallow;
globalLoose.render = render;
globalLoose.mount = mount;

import * as Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});
