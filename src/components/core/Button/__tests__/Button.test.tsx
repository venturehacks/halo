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

      wrapper
        .find(`[data-test="Button"]`)
        .last()
        .simulate('click');

      expect(dismiss).toBeCalledTimes(1);
    });
  });

  describe('snapshot', () => {
    test('default', () => {
      const component = render(<Button />);
      expect(component).toMatchSnapshot();
    });

    test('no emphasis', () => {
      const component = render(<Button emphasis={false} />);
      expect(component).toMatchSnapshot();
    });

    test('width 100%', () => {
      const component = render(<Button width="100%" />);
      expect(component).toMatchSnapshot();
    });

    describe('size', () => {
      test('xsmall', () => {
        const component = render(<Button size="xsmall" />);
        expect(component).toMatchSnapshot();
      });

      test('small', () => {
        const component = render(<Button size="small" />);
        expect(component).toMatchSnapshot();
      });

      test('regular', () => {
        const component = render(<Button size="regular" />);
        expect(component).toMatchSnapshot();
      });

      test('large', () => {
        const component = render(<Button size="large" />);
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

      test('warning', () => {
        const component = render(<Button variant="warning" />);
        expect(component).toMatchSnapshot();
      });

      test('danger', () => {
        const component = render(<Button variant="danger" />);
        expect(component).toMatchSnapshot();
      });

      test('success', () => {
        const component = render(<Button variant="success" />);
        expect(component).toMatchSnapshot();
      });

      test('secondary-gray', () => {
        const component = render(<Button variant="secondary-gray" />);
        expect(component).toMatchSnapshot();
      });

      test('clear', () => {
        const component = render(<Button variant="clear" />);
        expect(component).toMatchSnapshot();
      });

      test('gray', () => {
        const component = render(<Button variant="gray" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
