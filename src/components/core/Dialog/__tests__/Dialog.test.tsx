import { render } from 'enzyme';
import * as React from 'react';

import { Dialog } from '../index';

test('Smoke test', () => {
  const component = render(<Dialog>Buy Now</Dialog>);
  expect(component.text()).toContain('Buy Now');
});