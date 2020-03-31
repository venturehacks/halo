import { shallow } from 'enzyme';
import * as React from 'react';

import { Banner } from '../index';

test('smoke', () => {
  const component = shallow(<Banner>PHP</Banner>);
  expect(component.text()).toEqual('PHP');
});
