import { render } from 'enzyme';
import React from 'react';

import { Span } from '../index';

describe('Span', () => {
  test('smoke', () => {
    const span = render(<Span>Bueno</Span>);
    expect(span.text()).toEqual('Bueno');
  });

  describe('snapshots', () => {
    test(`contrast`, () => {
      const component = render(<Span contrast="AA">AA</Span>);

      expect(component).toMatchSnapshot();
    });

    test(`muted`, () => {
      const component = render(<Span muted>AAA</Span>);

      expect(component).toMatchSnapshot();
    });

    test(`xmuted`, () => {
      const component = render(<Span xmuted>AA</Span>);

      expect(component).toMatchSnapshot();
    });

    test(`xxmuted`, () => {
      const component = render(<Span xxmuted>A</Span>);

      expect(component).toMatchSnapshot();
    });
  });
});
