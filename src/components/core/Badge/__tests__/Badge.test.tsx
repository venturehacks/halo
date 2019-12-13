import { render } from 'enzyme';
import React from 'react';

import { Badge } from '../index';

test('Smoke test', () => {
  const component = render(<Badge>NICE BADGE</Badge>);
  expect(component.text()).toEqual('NICE BADGE');
});
