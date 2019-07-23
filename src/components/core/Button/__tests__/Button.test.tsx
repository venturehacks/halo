import { render } from 'enzyme';
import * as React from 'react';

import { Button } from '../index';

test('Smoke test', () => {
  const component = render(<Button>Click me</Button>);
  expect(component.text()).toContain('Click me');
});
