import { render } from 'enzyme';
import * as React from 'react';

import { RawTextarea } from '../index';

test('Smoke test', () => {
  const component = render(
    <RawTextarea value="Current value" onChange={() => {}} />,
  );

  expect(component.text()).toContain('Current value');
});
