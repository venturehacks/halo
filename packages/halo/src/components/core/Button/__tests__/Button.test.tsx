import { mount, render } from 'enzyme';
import React from 'react';

import { Button } from '../index';

describe('Button', () => {
  test('smoke', () => {
    const component = render(<Button>PHP</Button>);
    expect(component.text()).toEqual('PHP');
  });

  describe('dismiss', () => {
    test('callback executes', () => {
      const dismiss = jest.fn();
      const wrapper = mount(<Button onClick={dismiss} />);

      expect(dismiss).toBeCalledTimes(0);

      wrapper.find(`[data-test="Button"]`).last().simulate('click');

      expect(dismiss).toBeCalledTimes(1);
    });
  });

  describe('snapshot', () => {
    test('default', () => {
      const component = render(<Button />);
      expect(component).toMatchSnapshot();
    });

    test('width 100%', () => {
      const component = render(<Button width="100%" />);
      expect(component).toMatchSnapshot();
    });

    describe('size', () => {
      test('sm', () => {
        const component = render(<Button size="sm" />);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<Button size="md" />);
        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = render(<Button size="lg" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('variant', () => {
      test('primary', () => {
        const component = render(<Button variant="primary" />);
        expect(component).toMatchSnapshot();
      });

      test('secondary', () => {
        const component = render(<Button variant="secondary" />);
        expect(component).toMatchSnapshot();
      });

      test('gray', () => {
        const component = render(<Button variant="gray" />);
        expect(component).toMatchSnapshot();
      });

      test('error', () => {
        const component = render(<Button variant="error" />);
        expect(component).toMatchSnapshot();
      });

      test('clear', () => {
        const component = render(<Button variant="clear" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('gtm variant', () => {
      test('gtm-primary', () => {
        const component = render(<Button variant="gtm-primary" />);
        expect(component).toMatchSnapshot();
      });

      test('gtm-secondary', () => {
        const component = render(<Button variant="gtm-secondary" />);
        expect(component).toMatchSnapshot();
      });

      test('gtm-gray', () => {
        const component = render(<Button variant="gtm-gray" />);
        expect(component).toMatchSnapshot();
      });

      test('gtm-error', () => {
        const component = render(<Button variant="gtm-error" />);
        expect(component).toMatchSnapshot();
      });

      test('gtm-clear', () => {
        const component = render(<Button variant="gtm-clear" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
