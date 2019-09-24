import { render } from 'enzyme';
import * as React from 'react';

import { RawInput } from '../index';

test('Smoke test', () => {
  const component = render(
    <RawInput
      value="Current value"
      placeholder="Type your name..."
      onChange={() => {}}
    />,
  );

  expect(component.val()).toContain('Current value');
  expect(component.prop('placeholder')).toContain('Type your name...');
  expect(component.attr('type')).toContain('text'); // text is default
});