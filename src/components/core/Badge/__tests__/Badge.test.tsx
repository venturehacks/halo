import { render } from 'enzyme';
import React from 'react';

import { Badge } from '../index';

test('smoke', () => {
  const component = render(<Badge>NICE BADGE</Badge>);
  expect(component.text()).toEqual('NICE BADGE');
});
