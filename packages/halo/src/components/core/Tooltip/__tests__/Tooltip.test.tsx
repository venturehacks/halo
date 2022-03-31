import { mount, render } from 'enzyme';
import React from 'react';

import { Tooltip } from '../index';

// NOTE: needed this to prevent the following warning:
//
// Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into
// the server renderer's output format. This will lead to a mismatch between the initial,
// non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in
// components that render exclusively on the client.
//
// Stack overflow link: https://stackoverflow.com/q/58070996/
React.useLayoutEffect = React.useEffect;

describe('Tooltip', () => {
  describe('snapshot', () => {
    describe('size', () => {
      test('sm [default]', () => {
        const component = mount(
          <Tooltip content="small tooltip">
            <span>test</span>
          </Tooltip>,
        );

        component.prop('onMouseEnter');
        component.update();

        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = mount(
          <Tooltip content="medium tooltip" size="md">
            <span>test</span>
          </Tooltip>,
        );

        component.prop('onMouseEnter');
        component.update();

        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = mount(
          <Tooltip content="large tooltip" size="lg">
            <span>test</span>
          </Tooltip>,
        );

        component.prop('onMouseEnter');
        component.update();

        expect(component).toMatchSnapshot();
      });
    });
  });
});
