import { render } from 'enzyme';
import React from 'react';

import { Label } from '../index';

test('Smoke test', () => {
  const component = render(
    <Label supportingText="Who are you?" title="Name" />,
  );

  expect(component.text()).toContain('Name');
  expect(component.text()).toContain('Who are you?');
});
