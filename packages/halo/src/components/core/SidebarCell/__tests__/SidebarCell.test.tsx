import { mount, render, shallow } from 'enzyme';
import React from 'react';

import { SidebarCell, SidebarCellProps } from '../index';

const basicProps: SidebarCellProps = {
  byline: 'California, Utah, Colorado, Remote',
  isSelected: true,
  title: 'Account Executive',
};

const completeProps: SidebarCellProps = {
  ...basicProps,
  header: 'Last edit: 7 days ago',
  isStarred: true,
  onClick: () => alert('onClick'),
  onStarClick: () => alert('onStarClick'),
};

describe('SidebarCell', () => {
  test('smoke', () => {
    const component = shallow(<SidebarCell {...basicProps} />);
    expect(component.text()).toEqual(
      'Account ExecutiveCalifornia, Utah, Colorado, Remote',
    );
  });

  test('complete', () => {
    const component = shallow(<SidebarCell {...completeProps} />);
    expect(component.text()).toEqual(
      'Last edit: 7 days agoAccount Executive<StarFillIcon />California, Utah, Colorado, Remote',
    );
  });

  test('arbitrary children', () => {
    const component = shallow(
      <SidebarCell {...completeProps}>Posted by: foobar</SidebarCell>,
    );
    expect(component.text()).toEqual(
      'Last edit: 7 days agoAccount Executive<StarFillIcon />California, Utah, Colorado, RemotePosted by: foobar',
    );
  });

  test('cell callback', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <SidebarCell {...completeProps} onClick={callback} />,
    );

    expect(callback).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('star callback', () => {
    const callback = jest.fn();
    const starCallback = jest.fn();
    const wrapper = mount(
      <SidebarCell
        {...completeProps}
        onClick={callback}
        onStarClick={starCallback}
      />,
    );

    const starButton = wrapper.find('button');

    // clicking on star should not run parent onClick
    starButton.simulate('click');
    expect(starCallback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(0);

    // parent onClick should not trigger starCallback
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(starCallback).toHaveBeenCalledTimes(1);
  });

  describe('snapshot', () => {
    test('active', () => {
      const component = render(<SidebarCell {...basicProps} isSelected />);
      expect(component).toMatchSnapshot();
    });

    test('starred', () => {
      const component = render(<SidebarCell {...basicProps} isStarred />);
      expect(component).toMatchSnapshot();
    });

    test('accessibility attributes from onClick', () => {
      const component = render(<SidebarCell {...completeProps} />);
      expect(component).toMatchSnapshot();
    });

    test('data-attribute', () => {
      const component = render(<SidebarCell {...basicProps} data-id="123" />);
      expect(component).toMatchSnapshot();
    });
  });
});
