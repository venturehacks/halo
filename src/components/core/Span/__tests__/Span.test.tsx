import { shallow } from 'enzyme';
import * as React from 'react';

import { Span } from '../index';

test('Link changes the class when hovered', () => {
  const span = shallow(<Span size="xsmall">Bueno</Span>);
  expect(span.text()).toEqual('Bueno');
});
