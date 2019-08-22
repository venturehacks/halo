import { render } from 'enzyme';
import * as React from 'react';

import { Header } from '../index';

test('Smoke test', () => {
  const component = render(<Header h1>Play Tetris</Header>);
  expect(component.text()).toContain('Play Tetris');
});

test(`Invalid props don't propagate to HTML tag`, () => {
  const component = render(
    <Header h6 xxmuted uppercase>
      Play Tetris
    </Header>,
  );
  expect(component.text()).toContain('Play Tetris');
});
