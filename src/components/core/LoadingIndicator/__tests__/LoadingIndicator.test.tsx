import { render } from 'enzyme';
import * as React from 'react';

import { LoadingIndicator } from '../index';

test('Smoke test', () => {
  const component = render(<LoadingIndicator />);
  expect(component.text()).toContain('');
});
