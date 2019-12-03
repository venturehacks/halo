import { render } from 'enzyme';
import * as React from 'react';

import { ToggleSwitch } from '../index';

test('Smoke test', () => {
  const component = render(
    <ToggleSwitch id="foo" label="Current value" onChange={() => {}} />,
  );

  expect(component.text()).toContain('Current value');
});
