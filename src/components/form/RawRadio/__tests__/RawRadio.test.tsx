import { render } from 'enzyme';
import React from 'react';

import { RawRadio } from '../index';

test('smoke', () => {
  const component = render(<RawRadio id="editor" label="VSCode" />);

  expect(component.text()).toContain('VSCode');
});
