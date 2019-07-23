import { render } from 'enzyme';
import * as React from 'react';

import { Label } from '../index';

test('Smoke test', () => {
  const component = render(<Label size="sm">Buy Now</Label>);
  expect(component.text()).toContain('Buy Now');
});
