import { render } from 'enzyme';
import React from 'react';

import { Button } from '../index';

test('smoke', () => {
  const component = render(<Button>Click me</Button>);
  expect(component.text()).toContain('Click me');
});
