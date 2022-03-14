import { render } from 'enzyme';
import React from 'react';

import { Radio } from '../index';

test('smoke', () => {
  const component = render(<Radio id="editor" label="VSCode" />);

  expect(component.text()).toContain('VSCode');
});
