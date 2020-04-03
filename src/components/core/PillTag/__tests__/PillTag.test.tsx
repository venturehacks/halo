import { mount, render, shallow } from 'enzyme';
import React from 'react';

import { PillTag } from '../index';

describe('PillTag', () => {
  test('smoke', () => {
    const component = shallow(<PillTag>PHP</PillTag>);
    expect(component.text()).toEqual('PHP');
  });

  test('click callback', () => {
    const callback = jest.fn();
    const wrapper = mount(<PillTag onClick={callback}>click me</PillTag>);

    expect(callback).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  describe('snapshot', () => {
    test('plain', () => {
      const component = render(<PillTag>plain</PillTag>);
      expect(component).toMatchSnapshot();
    });

    test('href', () => {
      const component = render(
        <PillTag href="https://google.com">anchor tag with href</PillTag>,
      );
      expect(component).toMatchSnapshot();
    });

    test('interactive', () => {
      const component = render(
        <PillTag interactive>I'm interactive like an anchor!</PillTag>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
