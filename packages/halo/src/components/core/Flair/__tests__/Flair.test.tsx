import { render } from 'enzyme';
import React from 'react';

import { Flair } from '../index';

describe('Flair', () => {
  test('smoke', () => {
    const component = render(<Flair>content</Flair>);
    expect(component.text()).toEqual('content');
  });

  describe('snapshot', () => {
    test('default', () => {
      const component = render(<Flair>blue default</Flair>);
      expect(component).toMatchSnapshot();
    });

    describe('color', () => {
      test('orange', () => {
        const component = render(<Flair color="orange">orange</Flair>);
        expect(component).toMatchSnapshot();
      });

      test('red', () => {
        const component = render(<Flair color="red">red</Flair>);
        expect(component).toMatchSnapshot();
      });

      test('green', () => {
        const component = render(<Flair color="green">green</Flair>);
        expect(component).toMatchSnapshot();
      });
    });

    describe('size', () => {
      test('xs', () => {
        const component = render(<Flair size="xs">xs size</Flair>);
        expect(component).toMatchSnapshot();
      });

      test('sm', () => {
        const component = render(<Flair size="sm">sm size</Flair>);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<Flair size="md">md size</Flair>);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
