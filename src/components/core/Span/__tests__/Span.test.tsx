import { render } from 'enzyme';
import React from 'react';

import { Span } from '../index';

describe('Span', () => {
  test('smoke', () => {
    const span = render(<Span>Bueno</Span>);
    expect(span.text()).toEqual('Bueno');
  });

  describe('snapshot', () => {
    test(`antialiased`, () => {
      const component = render(<Span antialiased>antialiased</Span>);
      expect(component).toMatchSnapshot();
    });

    test(`block`, () => {
      const component = render(<Span block>block</Span>);
      expect(component).toMatchSnapshot();
    });

    test(`tag`, () => {
      const component = render(<Span tag="div">div tag</Span>);
      expect(component).toMatchSnapshot();
    });

    test(`uppercase`, () => {
      const component = render(<Span uppercase>uppercase</Span>);
      expect(component).toMatchSnapshot();
    });

    test(`strong`, () => {
      const component = render(<Span strong>strong</Span>);
      expect(component).toMatchSnapshot();
    });

    test(`semibold`, () => {
      const component = render(<Span semibold>semibold</Span>);
      expect(component).toMatchSnapshot();
    });

    describe('derive contrast', () => {
      test(`AA`, () => {
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

    describe('color', () => {
      test(`palette color`, () => {
        const component = render(<Span color="purple--100">purple--100</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`success`, () => {
        const component = render(<Span success>success</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`warning`, () => {
        const component = render(<Span warning>warning</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`error`, () => {
        const component = render(<Span error>error</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`prop collision`, () => {
        const spy = jest.spyOn(console, 'warn');
        expect(spy).toHaveBeenCalledTimes(0);
        const component = render(
          <Span contrast="AAA" error>
            should warn and use 'error' class
          </Span>,
        );
        // make sure user dev sees a console warning
        expect(spy).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot();
      });
    });

    describe('size', () => {
      test(`2xl`, () => {
        const component = render(<Span size="2xl">2xl</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`xl`, () => {
        const component = render(<Span size="xl">xl</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`lg`, () => {
        const component = render(<Span size="lg">lg</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`sm`, () => {
        const component = render(<Span size="sm">sm</Span>);
        expect(component).toMatchSnapshot();
      });

      test(`2xs`, () => {
        const component = render(<Span size="2xs">2xs</Span>);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
