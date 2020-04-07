import { render } from 'enzyme';
import React from 'react';

import { Avatar } from '../index';

const sharedProps = {
  imageUrl: 'https://avatars1.githubusercontent.com/u/194885?s=120&v=6',
  name: 'Drew',
};

describe('Avatar', () => {
  test('smoke', () => {
    const component = render(<Avatar {...sharedProps} size="large" />);

    expect(component.html()).toContain('<img');
  });

  describe('snapshots', () => {
    describe('size', () => {
      test(`xxxsmall`, () => {
        const component = render(<Avatar {...sharedProps} size="xxxsmall" />);

        expect(component).toMatchSnapshot();
      });

      test(`medium [default]`, () => {
        const component = render(<Avatar {...sharedProps} size="medium" />);

        expect(component).toMatchSnapshot();
      });

      test(`large`, () => {
        const component = render(<Avatar {...sharedProps} size="large" />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('shape', () => {
      test(`circle [default]`, () => {
        const component = render(<Avatar {...sharedProps} size="medium" />);

        expect(component).toMatchSnapshot();
      });
      test(`square`, () => {
        const component = render(
          <Avatar {...sharedProps} shape="square" size="medium" />,
        );

        expect(component).toMatchSnapshot();
      });
    });

    test(`badge label`, () => {
      const component = render(
        <Avatar {...sharedProps} badge="Test Badge" size="large" />,
      );

      expect(component.text()).toContain('Test Badge');
      expect(component).toMatchSnapshot();
    });

    test(`badgeColor`, () => {
      const component = render(
        <Avatar
          {...sharedProps}
          badge="Purple"
          badgeColor="purple"
          size="large"
        />,
      );

      expect(component.text()).toContain('Purple');
      expect(component).toMatchSnapshot();
    });

    describe(`badgeShape`, () => {
      test(`circle [default]`, () => {
        const component = render(
          <Avatar {...sharedProps} badge="Test Badge" size="large" />,
        );

        expect(component).toMatchSnapshot();
      });

      test(`square`, () => {
        const component = render(
          <Avatar
            {...sharedProps}
            badge="Test Badge"
            badgeShape="square"
            size="large"
          />,
        );

        expect(component).toMatchSnapshot();
      });
    });
  });
});
