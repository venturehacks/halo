import { render } from 'enzyme';
import React from 'react';

import { Header } from '../index';

describe('Header', () => {
  test('smoke', () => {
    const component = render(<Header h1>Play Tetris</Header>);
    expect(component.text()).toContain('Play Tetris');
  });

  describe('snapshots', () => {
    test(`h3 contrast AA`, () => {
      const component = render(
        <Header contrast="AA" h3>
          AA
        </Header>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
