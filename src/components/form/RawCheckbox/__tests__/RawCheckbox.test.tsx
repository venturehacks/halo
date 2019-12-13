import { render } from 'enzyme';
import React from 'react';

import { RawCheckbox } from '../index';

test('Smoke test', () => {
  const component = render(<RawCheckbox id="ice-cream" label="Chocolate" />);

  expect(component.text()).toContain('Chocolate');
});
