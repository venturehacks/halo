import { mount, render, shallow } from 'enzyme';
import React from 'react';

import { Banner } from '../index';

describe('Banner', () => {
  test('smoke', () => {
    const component = shallow(<Banner>PHP</Banner>);
    expect(component.text()).toEqual('PHP');
  });

  describe('dismiss', () => {
    test('hides on click', () => {
      const dismiss = jest.fn();
      const wrapper = mount(<Banner onDismiss={dismiss} offerDismiss />);

      let component = wrapper.find(`[data-test="Banner"]`);
      expect(component.hasClass('dismissed')).toBe(false);

      wrapper.find(`[data-test="Banner-closeButton"]`).last().simulate('click');

      component = wrapper.find(`[data-test="Banner"]`);
      expect(component.hasClass('dismissed')).toBe(true);
    });

    test('callback executes', () => {
      const dismiss = jest.fn();
      const wrapper = mount(<Banner onDismiss={dismiss} offerDismiss />);

      expect(dismiss).toBeCalledTimes(0);

      wrapper.find(`[data-test="Banner-closeButton"]`).last().simulate('click');

      expect(dismiss).toBeCalledTimes(1);
    });
  });

  describe('snapshot', () => {
    test('default', () => {
      const component = render(<Banner />);
      expect(component).toMatchSnapshot();
    });

    test('constrain', () => {
      const component = render(<Banner constrain />);
      expect(component).toMatchSnapshot();
    });

    test('offer dismiss', () => {
      const component = render(<Banner offerDismiss />);
      expect(component).toMatchSnapshot();
    });

    describe('variant', () => {
      test('success', () => {
        const component = render(<Banner variant="success" />);
        expect(component).toMatchSnapshot();
      });

      test('warning', () => {
        const component = render(<Banner variant="warning" />);
        expect(component).toMatchSnapshot();
      });

      test('error', () => {
        const component = render(<Banner variant="error" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
