import { render } from 'enzyme';
import React from 'react';

import { Badge } from '../index';

describe('Badge', () => {
  test('smoke', () => {
    const component = render(<Badge text="NICE BADGE" />);
    expect(component.text()).toEqual('NICE BADGE');
  });

  describe('snapshot', () => {
    describe('color', () => {
      test('gray', () => {
        const component = render(<Badge />);
        expect(component).toMatchSnapshot();
      });

      test('blue', () => {
        const component = render(<Badge color="blue" />);
        expect(component).toMatchSnapshot();
      });

      test('green', () => {
        const component = render(<Badge color="green" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('position', () => {
      test('top', () => {
        const component = render(<Badge />);
        expect(component).toMatchSnapshot();
      });

      test('bottom', () => {
        const component = render(<Badge position="bottom" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('shape', () => {
      test('circle', () => {
        const component = render(<Badge />);
        expect(component).toMatchSnapshot();
      });

      test('square', () => {
        const component = render(<Badge shape="square" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('size', () => {
      test('sm', () => {
        const component = render(<Badge />);
        expect(component).toMatchSnapshot();
      });

      test('size', () => {
        const component = render(<Badge size="md" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('count', () => {
      test('under 100', () => {
        const component = render(<Badge count={3} />);
        expect(component.text()).toEqual('3');
      });

      test('over 100', () => {
        const component = render(<Badge count={120} />);
        expect(component.text()).toEqual('99+');
      });
    });
  });
});
