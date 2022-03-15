import { render } from 'enzyme';
import React from 'react';

import { Textarea } from '../index';

describe('Textarea', () => {
  test('smoke', () => {
    const component = render(
      <Textarea onChange={() => {}} value="textarea value" />,
    );

    expect(component.text()).toContain('textarea value');
  });

  describe('snapshot', () => {
    describe('size', () => {
      test('sm', () => {
        const component = render(
          <Textarea onChange={() => {}} size="sm" value="small" />,
        );
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(
          <Textarea onChange={() => {}} value="medium" />,
        );
        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = render(
          <Textarea onChange={() => {}} size="lg" value="large" />,
        );
        expect(component).toMatchSnapshot();
      });
    });
  });
});
