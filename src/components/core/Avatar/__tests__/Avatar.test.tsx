import { render } from 'enzyme';
import * as React from 'react';

import { Avatar } from '../index';

test('Smoke test', () => {
  const component = render(
    <Avatar
      imageUrl="https://avatars1.githubusercontent.com/u/194885?s=120&v=6"
      badge="DOPE BADGE"
      size="large"
      name="Drew"
    />,
  );

  expect(component.text()).toContain('DOPE BADGE');
});
