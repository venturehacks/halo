import { render } from 'enzyme';
import React from 'react';

import { Paragraph } from '../index';

/**
 * Since Paragraph is a thin proxy for Span, we're OK with
 * incomplete snapshots. See Span for comprehensive tests.
 */
describe('Paragraph', () => {
  test('smoke', () => {
    const component = render(<Paragraph>The story begins...</Paragraph>);
    expect(component.text()).toContain('The story begins...');
  });

  describe('snapshot', () => {
    test('contrast', () => {
      const component = render(<Paragraph contrast="A">single A</Paragraph>);
      expect(component).toMatchSnapshot();
    });

    test('size', () => {
      const component = render(<Paragraph size="2xl">size 2xl</Paragraph>);
      expect(component).toMatchSnapshot();
    });

    test('line height override', () => {
      const component = render(
        <Paragraph lineHeight="dense" size="xs">
          dense line height override
        </Paragraph>,
      );
      expect(component).toMatchSnapshot();
    });

    test('flow', () => {
      const component = render(<Paragraph flow={false}>no flow</Paragraph>);
      expect(component).toMatchSnapshot();
    });
  });
});
