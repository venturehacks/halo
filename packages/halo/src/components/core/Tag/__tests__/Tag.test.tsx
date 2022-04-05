import { mount, render } from 'enzyme';
import React from 'react';

import { Tag } from '../index';

describe('Tag', () => {
  test('smoke', () => {
    const component = render(<Tag label="PHP" />);
    expect(component.text()).toEqual('PHP');
  });

  test('tag callback', () => {
    const callback = jest.fn();
    const wrapper = mount(<Tag label="click me" onClick={callback} />);

    expect(callback).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('close button callback', () => {
    const tagCallback = jest.fn();
    const closeCallback = jest.fn();
    const wrapper = mount(
      <Tag
        label="I can be closed"
        onClick={tagCallback}
        onClose={closeCallback}
      />,
    );

    const closeButton = wrapper.find('svg');

    // clicking on close button should not run parent onClick
    closeButton.simulate('click');
    expect(closeCallback).toHaveBeenCalledTimes(1);
    expect(tagCallback).toHaveBeenCalledTimes(0);

    // parent onClick should not trigger onClose
    wrapper.simulate('click');
    expect(closeCallback).toHaveBeenCalledTimes(1);
    expect(tagCallback).toHaveBeenCalledTimes(1);
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

    describe('size', () => {
      test('xs', () => {
        const component = render(<Tag size="xs" />);
        expect(component).toMatchSnapshot();
      });

      test('sm [default]', () => {
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
