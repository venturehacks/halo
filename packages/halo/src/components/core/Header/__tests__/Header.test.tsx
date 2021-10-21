import { render } from 'enzyme';
import React from 'react';

import { Header } from '../index';

/**
 * Since Header is a thin proxy for Span, we're OK with
 * incomplete snapshots. See Span for comprehensive tests.
 */
describe('Header', () => {
  test('smoke', () => {
    const component = render(<Header h1>Play Tetris</Header>);
    expect(component.text()).toContain('Play Tetris');
  });

  describe('snapshot', () => {
    test('tag override', () => {
      const component = render(
        <Header tag="h1" h4>
          h1 should win over h4
        </Header>,
      );

      expect(component).toMatchSnapshot();
    });

    test('size override', () => {
      const component = render(
        <Header size="2xl" h4>
          2xl should override h4
        </Header>,
      );

      expect(component).toMatchSnapshot();
    });

    test('palette color', () => {
      const component = render(
        <Header color="red--100">red--100 color</Header>,
      );

      expect(component).toMatchSnapshot();
    });

    test('flow', () => {
      const component = render(<Header flow={false}>no flow</Header>);

      expect(component).toMatchSnapshot();
    });

    test('inline block', () => {
      const component = render(<Header inlineBlock>inline block</Header>);

      expect(component).toMatchSnapshot();
    });

    test(`h3 contrast AA`, () => {
      // good mix of attributes
      const component = render(
        <Header contrast="AA" h3>
          AA
        </Header>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
