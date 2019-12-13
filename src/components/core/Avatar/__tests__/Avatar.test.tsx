import { render } from 'enzyme';
import React from 'react';

import { Avatar } from '../index';

test('Smoke test', () => {
  const component = render(
    <Avatar
      badge="DOPE BADGE"
      imageUrl="https://avatars1.githubusercontent.com/u/194885?s=120&v=6"
      name="Drew"
      size="large"
    />,
  );

  expect(component.text()).toContain('DOPE BADGE');
});
