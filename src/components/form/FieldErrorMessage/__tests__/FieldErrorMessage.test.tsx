import { render } from 'enzyme';
import * as React from 'react';

import { FieldErrorMessage } from '../index';

test('Smoke test', () => {
  const component = render(
    <FieldErrorMessage
      preset="text-only"
      errorSeverity="warning"
      message="Damn, you messed up"
    />,
  );

  expect(component.text()).toContain('Damn, you messed up');
});

test('Smoke test', () => {
  const component = render(
    <FieldErrorMessage preset="block" errorSeverity="critical">
      You really messed up
    </FieldErrorMessage>,
  );

  expect(component.text()).toContain('You really messed up');
});
