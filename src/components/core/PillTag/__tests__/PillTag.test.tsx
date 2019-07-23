import { shallow } from 'enzyme';
import * as React from 'react';

import { PillTag } from '../index';

test('Smoke test', () => {
  const component = shallow(<PillTag>PHP</PillTag>);
  expect(component.text()).toEqual('PHP');
});
