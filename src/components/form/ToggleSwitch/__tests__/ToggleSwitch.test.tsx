import { render } from 'enzyme';
import * as React from 'react';

import { ToggleSwitch } from '../index';

test('Smoke test', () => {
  const component = render(
    <ToggleSwitch id="foo" onChange={() => {}} value="Current value" />,
  );

  expect(component.val()).toContain('Current value');
  expect(component.prop('placeholder')).toContain('Type your name...');
  expect(component.attr('type')).toContain('text'); // text is default
});
