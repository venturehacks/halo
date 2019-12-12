import { shallow } from 'enzyme';
import * as React from 'react';

import { Banner } from '../index';

test('Smoke test', () => {
  const component = shallow(<Banner>PHP</Banner>);
  expect(component.text()).toEqual('PHP');
});
