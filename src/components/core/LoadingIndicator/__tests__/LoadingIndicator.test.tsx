import { render } from 'enzyme';
import React from 'react';

import { LoadingIndicator } from '../index';

describe('LoadingIndicator', () => {
  test('smoke', () => {
    const component = render(<LoadingIndicator />);
    expect(component.text()).toContain('');
  });

  describe('snapshot', () => {
    test('primary', () => {
      const component = render(<LoadingIndicator variant="primary" bare />);

      expect(component).toMatchSnapshot();
    });

    test('alternate', () => {
      const component = render(<LoadingIndicator variant="alternate" bare />);

      expect(component).toMatchSnapshot();
    });

    test('default component wrapping', () => {
      // should wrap in div.component
      const component = render(<LoadingIndicator variant="alternate" />);

      expect(component).toMatchSnapshot();
    });
  });
});
