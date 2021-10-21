import { render } from 'enzyme';
import React from 'react';

import { RawInput } from '../index';

test('smoke', () => {
  const component = render(
    <RawInput
      onChange={() => {}}
      placeholder="Type your name..."
      value="Current value"
    />,
  );

  expect(component.val()).toContain('Current value');
  expect(component.prop('placeholder')).toContain('Type your name...');
  expect(component.attr('type')).toContain('text'); // text is default
});
