import { render } from 'enzyme';
import React from 'react';

import { InterfaceHeader } from '../index';

describe('InterfaceHeader', () => {
  test('smoke', () => {
    const component = render(
      <InterfaceHeader
        byline="Customize your stuff!"
        title="General Settings"
        page
      />,
    );
    expect(component.text()).toContain('General Settings');
    expect(component.text()).toContain('Customize your stuff!');
  });

  test('className', () => {
    const component = render(
      <InterfaceHeader className="mb-10" title="General Settings" page />,
    );
    expect(component.hasClass('mb-10')).toBeTruthy();
  });

  describe('lacking hierarhcy', () => {
    test('throws exception ', () => {
      expect(() =>
        render(<InterfaceHeader title="This should throw an exception" />),
      ).toThrow();
    });
  });

  describe('snapshot', () => {
    test('byline', () => {
      const component = render(
        <InterfaceHeader byline="Byline" title="Title" page />,
      );

      expect(component).toMatchSnapshot();
    });

    describe('hierarchy', () => {
      test('page', () => {
        const component = render(
          <InterfaceHeader title="General Settings" page />,
        );

        expect(component).toMatchSnapshot();
      });

      test('section', () => {
        const component = render(
          <InterfaceHeader title="Unbiased Sourcing" section />,
        );

        expect(component).toMatchSnapshot();
      });

      test('subsection', () => {
        const component = render(
          <InterfaceHeader title="Diversity" subsection />,
        );

        expect(component).toMatchSnapshot();
      });

      test('mini', () => {
        const component = render(
          <InterfaceHeader title="Ideal next opportunity" mini />,
        );

        expect(component).toMatchSnapshot();
      });
    });
  });
});
