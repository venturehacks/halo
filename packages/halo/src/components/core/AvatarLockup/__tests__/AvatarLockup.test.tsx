import { render } from 'enzyme';
import React from 'react';

import { AvatarLockup } from '../index';

const sharedProps = {
  children: <>Vishal</>,
  imageUrl: 'https://avatars.githubusercontent.com/u/56262247',
};

describe('Avatar', () => {
  test('smoke', () => {
    const component = render(<AvatarLockup {...sharedProps} />);

    expect(component.html()).toContain('<img');
  });

  describe('snapshots', () => {
    describe('size', () => {
      test(`sm`, () => {
        const component = render(<AvatarLockup {...sharedProps} size="sm" />);

        expect(component).toMatchSnapshot();
      });

      test(`md [default]`, () => {
        const component = render(<AvatarLockup {...sharedProps} />);

        expect(component).toMatchSnapshot();
      });

      test(`lg`, () => {
        const component = render(<AvatarLockup {...sharedProps} size="lg" />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('orientation', () => {
      test(`left [default]`, () => {
        const component = render(<AvatarLockup {...sharedProps} />);

        expect(component).toMatchSnapshot();
      });
      test(`right`, () => {
        const component = render(
          <AvatarLockup {...sharedProps} orientation="right" />,
        );

        expect(component).toMatchSnapshot();
      });

      test(`top`, () => {
        const component = render(
          <AvatarLockup {...sharedProps} orientation="top" />,
        );

        expect(component).toMatchSnapshot();
      });
    });
  });
});
