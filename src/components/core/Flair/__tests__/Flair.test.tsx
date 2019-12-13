import { render } from 'enzyme';
import React from 'react';

import { Flair } from '../index';

test('Smoke test', () => {
  const component = render(<Flair size="sm">Buy Now</Flair>);
  expect(component.text()).toContain('Buy Now');
});
