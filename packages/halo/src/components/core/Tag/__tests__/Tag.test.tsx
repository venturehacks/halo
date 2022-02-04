import { mount, render } from 'enzyme';
import React from 'react';

import { Tag } from '../index';

describe('Tag', () => {
  test('smoke', () => {
    const component = render(<Tag label="PHP" />);
    expect(component.text()).toEqual('PHP');
  });

  test('click callback on tag', () => {
    const callback = jest.fn();
    const wrapper = mount(<Tag label="click me" onClick={callback} />);

    expect(callback).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('click close button', () => {
    const callback = jest.fn();
    const wrapper = mount(<Tag label="I can be closed" onClose={callback} />);

    expect(callback).toHaveBeenCalledTimes(0);
    wrapper.find('svg').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  describe('snapshot', () => {
    test('plain', () => {
      const component = render(<Tag label="plain" />);
      expect(component).toMatchSnapshot();
    });

    test('with children', () => {
      const component = render(<Tag>with children</Tag>);
      expect(component).toMatchSnapshot();
      expect(component.text()).toEqual('with children');
    });

    describe('color', () => {
      test('red', () => {
        const component = render(<Tag color="red" />);
        expect(component).toMatchSnapshot();
      });

      test('gray', () => {
        const component = render(<Tag color="gray" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('shape', () => {
      test('pill', () => {
        const component = render(<Tag shape="pill" />);
        expect(component).toMatchSnapshot();
      });

      test('rectangle', () => {
        const component = render(<Tag shape="rectangle" />);
        expect(component).toMatchSnapshot();
      });
    });

    describe('size', () => {
      test('sm', () => {
        const component = render(<Tag size="sm" />);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<Tag size="md" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
