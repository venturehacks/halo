import { render } from 'enzyme';
import React from 'react';

import { RawTextarea } from '../index';

describe('RawTextarea', () => {
  test('smoke', () => {
    const component = render(
      <RawTextarea onChange={() => {}} value="textarea value" />,
    );

    expect(component.text()).toContain('textarea value');
  });

  describe('snapshot', () => {
    describe('size', () => {
      test('sm', () => {
        const component = render(
          <RawTextarea onChange={() => {}} size="sm" value="small" />,
        );
        expect(component).toMatchSnapshot();
      });

      test('md', () => {
        const component = render(
          <RawTextarea onChange={() => {}} value="medium" />,
        );
        expect(component).toMatchSnapshot();
      });

      test('lg', () => {
        const component = render(
          <RawTextarea onChange={() => {}} size="lg" value="large" />,
        );
        expect(component).toMatchSnapshot();
      });
    });
  });
});
