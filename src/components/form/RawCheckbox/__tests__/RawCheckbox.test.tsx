import { render } from 'enzyme';
import React from 'react';

import { RawCheckbox } from '../index';

test('smoke', () => {
  const component = render(<RawCheckbox id="ice-cream" label="Chocolate" />);

  expect(component.text()).toContain('Chocolate');
});
