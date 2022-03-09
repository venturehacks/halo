import { render } from 'enzyme';
import React from 'react';

import { Bracket } from '../index';

describe('Bracket', () => {
  test('smoke', () => {
    const component = render(
      <Bracket>
        <span>Label</span>
        <button>Click me</button>
      </Bracket>,
    );
    expect(component.text()).toContain('LabelClick me');
    expect(component.hasClass('isolateFirstChild')).toBeTruthy();
  });

  test('className', () => {
    const component = render(
      <Bracket className="mb-10">
        <span>Label</span>
        <button>Click me</button>
      </Bracket>,
    );
    expect(component.hasClass('mb-10')).toBeTruthy();
  });

  test('gap', () => {
    const component = render(
      <Bracket className="gap-8">
        <span>Label</span>
        <button>Click me</button>
      </Bracket>,
    );
    expect(component.hasClass('gap-8')).toBeTruthy();
    expect(component.hasClass('gap-4')).toBeFalsy();
  });

  test('isolate last child', () => {
    const component = render(
      <Bracket isolate="last-child">
        <span>Label</span>
        <button>Click me</button>
      </Bracket>,
    );
    expect(component.hasClass('isolateLastChild')).toBeTruthy();
  });

  describe('snapshot', () => {
    test('smoke', () => {
      const component = render(
        <Bracket>
          <span>Label</span>
          <button>Click me</button>
        </Bracket>,
      );
      expect(component).toMatchSnapshot();
    });

    test('gap', () => {
      const component = render(
        <Bracket className="gap-6">
          <span>Label</span>
          <button>Click me</button>
        </Bracket>,
      );
      expect(component).toMatchSnapshot();
    });

    test('isolate last child', () => {
      const component = render(
        <Bracket isolate="last-child">
          <span>Label</span>
          <button>Click me</button>
        </Bracket>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
