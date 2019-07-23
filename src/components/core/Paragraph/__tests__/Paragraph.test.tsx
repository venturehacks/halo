import { render } from 'enzyme';
import * as React from 'react';

import { Paragraph } from '../index';

test('Smoke test', () => {
  const component = render(<Paragraph>The story begins...</Paragraph>);
  expect(component.text()).toContain('The story begins...');
});
