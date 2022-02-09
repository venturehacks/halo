import { render } from 'enzyme';
import React from 'react';

import { Panel } from '../index';

describe('Panel', () => {
  test('smoke', () => {
    const component = render(<Panel>Content</Panel>);
    expect(component.text()).toContain('Content');
  });

  test('title', () => {
    const component = render(
      <Panel className="gap-10" title="Title">
        className
      </Panel>,
    );
    expect(component.hasClass('gap-10')).toBeTruthy();
  });

  test('className', () => {
    const component = render(<Panel className="gap-10">className</Panel>);
    expect(component.hasClass('gap-10')).toBeTruthy();
  });

  test('negativeSpace', () => {
    const component = render(
      <Panel negativeSpace="sm">Small negative space</Panel>,
    );
    expect(component.hasClass('p-6')).toBeTruthy();
    expect(component.hasClass('pt-4')).toBeTruthy();
  });

  test('flow', () => {
    const component = render(<Panel flow>Flow</Panel>);
    expect(component.hasClass('mb-6')).toBeTruthy();
  });

  describe('snapshot', () => {
    test('smoke', () => {
      const component = render(<Panel>Content</Panel>);

      expect(component).toMatchSnapshot();
    });

    test('title', () => {
      const component = render(<Panel title="General Settings">Content</Panel>);

      expect(component).toMatchSnapshot();
    });

    test('fully loaded props', () => {
      const component = render(
        <Panel className="gap-4" negativeSpace="sm" flow>
          Fully loaded props
        </Panel>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
