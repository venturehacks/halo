import { render } from 'enzyme';
import React from 'react';

import { AttentionIndicator } from '../index';

describe('AttentionIndicator', () => {
  describe('snapshot', () => {
    describe('color', () => {
      test('orange', () => {
        const component = render(<AttentionIndicator color="orange" />);
        expect(component).toMatchSnapshot();
      });

      test('red', () => {
        const component = render(<AttentionIndicator color="red" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('shape', () => {
      test('circle', () => {
        const component = render(<AttentionIndicator shape="circle" />);
        expect(component).toMatchSnapshot();
      });

      test('oval', () => {
        const component = render(<AttentionIndicator shape="oval" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('size', () => {
      test('sm', () => {
        const component = render(<AttentionIndicator size="sm" />);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<AttentionIndicator size="md" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
