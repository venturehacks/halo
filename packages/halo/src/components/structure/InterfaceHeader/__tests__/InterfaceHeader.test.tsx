import { render } from 'enzyme';
import React from 'react';

import { InterfaceHeader } from '../index';

describe('InterfaceHeader', () => {
  test('smoke', () => {
    const component = render(
      <InterfaceHeader page>General Settings</InterfaceHeader>,
    );
    expect(component.text()).toContain('General Settings');
  });

  test('className', () => {
    const component = render(
      <InterfaceHeader className="mb-10" page>
        General Settings
      </InterfaceHeader>,
    );
    expect(component.hasClass('mb-10')).toBeTruthy();
  });

  describe('lacking hierarhcy', () => {
    test('throws exception ', () => {
      expect(() =>
        render(
          <InterfaceHeader>This should throw an exception</InterfaceHeader>,
        ),
      ).toThrow();
    });
  });

  describe('snapshot', () => {
    test('page', () => {
      const component = render(
        <InterfaceHeader page>General Settings</InterfaceHeader>,
      );

      expect(component).toMatchSnapshot();
    });

    test('panel', () => {
      const component = render(
        <InterfaceHeader panel>Unbiased Sourcing</InterfaceHeader>,
      );

      expect(component).toMatchSnapshot();
    });

    test('section', () => {
      const component = render(
        <InterfaceHeader section>Diversity</InterfaceHeader>,
      );

      expect(component).toMatchSnapshot();
    });

    test('micro', () => {
      const component = render(
        <InterfaceHeader micro>Ideal next opportunity</InterfaceHeader>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
