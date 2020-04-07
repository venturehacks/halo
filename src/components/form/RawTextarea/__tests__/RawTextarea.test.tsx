import { render } from 'enzyme';
import React from 'react';

import { RawTextarea } from '../index';

test('smoke', () => {
  const component = render(
    <RawTextarea onChange={() => {}} value="Current value" />,
  );

  expect(component.text()).toContain('Current value');
});
