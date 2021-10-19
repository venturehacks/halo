import { render } from 'enzyme';
import React from 'react';

import { Badge } from '../index';

describe('Badge', () => {
  test('smoke', () => {
    const component = render(<Badge>NICE BADGE</Badge>);
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
  });
});
