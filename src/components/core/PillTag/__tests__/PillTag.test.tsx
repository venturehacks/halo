import { shallow } from 'enzyme';
import React from 'react';

import { PillTag } from '../index';

test('smoke', () => {
  const component = shallow(<PillTag>PHP</PillTag>);
  expect(component.text()).toEqual('PHP');
});
