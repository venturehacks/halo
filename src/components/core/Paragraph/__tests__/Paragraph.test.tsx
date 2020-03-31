import { render } from 'enzyme';
import React from 'react';

import { Paragraph } from '../index';

test('smoke', () => {
  const component = render(<Paragraph>The story begins...</Paragraph>);
  expect(component.text()).toContain('The story begins...');
});
