import { render } from 'enzyme';
import React from 'react';

import { FieldErrorMessage } from '../index';

test('smoke', () => {
  const component = render(
    <FieldErrorMessage
      errorSeverity="warning"
      message="Damn, you messed up"
      preset="text-only"
    />,
  );

  expect(component.text()).toContain('Damn, you messed up');
});

test('smoke', () => {
  const component = render(
    <FieldErrorMessage errorSeverity="critical" preset="block">
      You really messed up
    </FieldErrorMessage>,
  );

  expect(component.text()).toContain('You really messed up');
});
