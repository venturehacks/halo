import { render } from 'enzyme';
import * as React from 'react';

import { RawSelect } from '../index';

test('Smoke test', () => {
  const component = render(
    <RawSelect
      options={[
        { label: 'Foo', value: 'foo ' },
        { label: 'Bar', value: 'bar ' },
      ]}
    />,
  );

  expect(component.text()).toContain('Foo');
});
