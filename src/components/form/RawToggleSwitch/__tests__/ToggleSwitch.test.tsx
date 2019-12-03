import { render } from 'enzyme';
import * as React from 'react';

import { RawToggleSwitch } from '../index';

test('Smoke test', () => {
  const component = render(
    <RawToggleSwitch id="foo" label="Current value" onChange={() => {}} />,
  );

  expect(component.text()).toContain('Current value');
});
