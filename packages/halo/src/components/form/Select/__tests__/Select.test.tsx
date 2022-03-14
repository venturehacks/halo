import { render } from 'enzyme';
import React from 'react';

import { Select, SelectOption } from '../index';

const options: SelectOption[] = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
];

describe('Select', () => {
  test('smoke', () => {
    const component = render(<Select options={options} />);

    expect(component.text()).toContain('ChocolateVanillaStrawberry');
  });

  describe('snapshot', () => {
    describe('size', () => {
      test('sm', () => {
        const component = render(<Select options={options} size="sm" />);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<Select options={options} />);
        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = render(<Select options={options} size="lg" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
