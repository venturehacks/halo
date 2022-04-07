import { render } from 'enzyme';
import React from 'react';

import { Avatar, AvatarSize } from '../index';

const sharedProps = {
  imageUrl: 'https://avatars1.githubusercontent.com/u/194885',
  name: 'Drew',
};

describe('Avatar', () => {
  test('smoke', () => {
    const component = render(<Avatar {...sharedProps} size="sm" />);

    expect(component.html()).toContain('<img');
  });

  describe('snapshots', () => {
    describe('size', () => {
      test(`xs`, () => {
        const component = render(<Avatar {...sharedProps} size="xs" />);

        expect(component).toMatchSnapshot();
      });

      test(`md [default]`, () => {
        const component = render(<Avatar {...sharedProps} size="md" />);

        expect(component).toMatchSnapshot();
      });

      test(`lg`, () => {
        const component = render(<Avatar {...sharedProps} size="lg" />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('shape', () => {
      test(`circle [default]`, () => {
        const component = render(<Avatar {...sharedProps} size="md" />);

        expect(component).toMatchSnapshot();
      });
      test(`square`, () => {
        const component = render(
          <Avatar {...sharedProps} shape="square" size="md" />,
        );

        expect(component).toMatchSnapshot();
      });
    });

    test(`badge label`, () => {
      const component = render(
        <Avatar {...sharedProps} badge="Test Badge" size="lg" />,
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
          size="lg"
        />,
      );

      expect(component.text()).toContain('Purple');
      expect(component).toMatchSnapshot();
    });

    describe(`badgeShape`, () => {
      test(`circle [default]`, () => {
        const component = render(
          <Avatar {...sharedProps} badge="Test Badge" size="lg" />,
        );

        expect(component).toMatchSnapshot();
      });

      test(`square`, () => {
        const component = render(
          <Avatar
            {...sharedProps}
            badge="Test Badge"
            badgeShape="square"
            size="lg"
          />,
        );

        expect(component).toMatchSnapshot();
      });
    });
  });
});
