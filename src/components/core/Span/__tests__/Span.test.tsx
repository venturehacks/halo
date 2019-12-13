import { render } from 'enzyme';
import React from 'react';

import { Span } from '../index';

test('Smoke test', () => {
  const span = render(<Span>Bueno</Span>);
  expect(span.text()).toEqual('Bueno');
});
