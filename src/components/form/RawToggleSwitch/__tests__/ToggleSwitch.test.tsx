import { render } from 'enzyme';
import React from 'react';

import { RawToggleSwitch } from '../index';

test('smoke', () => {
  const component = render(
    <RawToggleSwitch id="foo" label="Current value" onChange={() => {}} />,
  );

  expect(component.text()).toContain('Current value');
});
