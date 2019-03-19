const globalLoose: any = global;

import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lodash';
import React from 'react';

configure({
  adapter: new Adapter(),
});
