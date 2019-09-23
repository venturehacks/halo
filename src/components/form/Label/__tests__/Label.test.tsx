import { render } from 'enzyme';
import * as React from 'react';

import { Label } from '../index';

test('Smoke test', () => {
  const component = render(
    <Label title="Name" supportingText="Who are you?" />,
  );

  expect(component.text()).toContain('Name');
  expect(component.text()).toContain('Who are you?');
});
