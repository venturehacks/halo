import { mount, render, shallow } from 'enzyme';
import React from 'react';

import { Dialog } from '../index';

describe('Dialog', () => {
  test('smoke', () => {
    const component = render(<Dialog>content</Dialog>);
    expect(component.text()).toEqual('content');
  });

  describe('features', () => {
    describe('title', () => {
      test('string', () => {
        const component = render(<Dialog title="My title">content</Dialog>);
        expect(component.text()).toContain('My title');
      });

      test('JSX', () => {
        const jsxTitle = <span data-test="jsx">JSX Title</span>;
        const wrapper = shallow(<Dialog title={jsxTitle}>content</Dialog>);
        expect(wrapper.contains(jsxTitle)).toEqual(true);
      });
    });

    describe('button', () => {
      test('primary', () => {
        const callback = jest.fn();
        const wrapper = mount(
          <Dialog onPrimaryButtonClick={callback} primaryButtonLabel="OK">
            Demo
          </Dialog>,
        );

        wrapper
          .find(`[data-test="Dialog-primaryButton"]`)
          .last()
          .simulate('click');

        expect(callback).toBeCalledTimes(1);
      });

      test('secondary', () => {
        const callback = jest.fn();
        const wrapper = mount(
          <Dialog
            onSecondaryButtonClick={callback}
            secondaryButtonLabel="Cancel"
          >
            Demo
          </Dialog>,
        );

        wrapper
          .find(`[data-test="Dialog-secondaryButton"]`)
          .last()
          .simulate('click');

        expect(callback).toBeCalledTimes(1);
      });
    });
  });

  describe('snapshot', () => {
    test('default', () => {
      const component = render(<Dialog>content</Dialog>);
      expect(component).toMatchSnapshot();
    });

    test('inline context', () => {
      const component = render(<Dialog context="inline">content</Dialog>);
      expect(component).toMatchSnapshot();
    });

    test('no content padding', () => {
      const component = render(<Dialog contentPadding={false}>content</Dialog>);
      expect(component).toMatchSnapshot();
    });

    test('title + both buttons', () => {
      const component = render(
        <Dialog
          primaryButtonLabel="Save"
          secondaryButtonLabel="Cancel"
          title="Title"
        >
          content
        </Dialog>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
