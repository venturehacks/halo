import { render } from 'enzyme';
import React from 'react';

import { Checkbox } from '../index';

test('smoke', () => {
  const component = render(<Checkbox id="ice-cream" label="Chocolate" />);

  expect(component.text()).toContain('Chocolate');
});
