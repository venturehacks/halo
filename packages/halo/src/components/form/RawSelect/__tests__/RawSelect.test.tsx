import { render } from 'enzyme';
import React from 'react';

import { RawSelect, RawSelectOption } from '../index';

const options: RawSelectOption[] = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
];

describe('RawSelect', () => {
  test('smoke', () => {
    const component = render(<RawSelect options={options} />);

    expect(component.text()).toContain('ChocolateVanillaStrawberry');
  });

  describe('snapshot', () => {
    describe('size', () => {
      test('sm', () => {
        const component = render(<RawSelect options={options} size="sm" />);
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(<RawSelect options={options} />);
        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = render(<RawSelect options={options} size="lg" />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
