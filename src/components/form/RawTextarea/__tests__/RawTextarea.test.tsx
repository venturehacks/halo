import { render } from 'enzyme';
import * as React from 'react';

import { RawTextarea } from '../index';

test('Smoke test', () => {
  const component = render(
    <RawTextarea onChange={() => {}} value="Current value" />,
  );

  expect(component.text()).toContain('Current value');
});
