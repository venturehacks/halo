import { render } from 'enzyme';
import * as React from 'react';

import { RawRadio } from '../index';

test('Smoke test', () => {
  const component = render(<RawRadio id="editor" label="VSCode" />);

  expect(component.text()).toContain('VSCode');
});
