import { render } from 'enzyme';
import React from 'react';

import { Attribute, AttributeList } from '../index';

describe('Attribute', () => {
  test('smoke', () => {
    const component = render(
      <Attribute name="Recruiting contact" value="Drew Lustro" />,
    );
    expect(component.text()).toContain('Recruiting contactDrew Lustro');
  });

  test('className', () => {
    const component = render(
      <Attribute
        className="mb-10"
        name="Recruiting contact"
        value="Vishal Jeet"
      />,
    );
    expect(component.hasClass('mb-10')).toBeTruthy();
  });

  describe('snapshot', () => {
    test('smoke', () => {
      const component = render(
        <Attribute name="Recruiting contact" value="Drew Lustro" />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});

describe('AttributeList', () => {
  test('smoke', () => {
    const component = render(
      <AttributeList>
        <Attribute name="key" value="value" />
        <Attribute name="term" value="definition" />
      </AttributeList>,
    );
    expect(component.text()).toContain('keyvaluetermdefinition');
  });

  test('className', () => {
    const component = render(
      <AttributeList className="mb-10">
        <Attribute name="key" value="value" />
        <Attribute name="term" value="definition" />
      </AttributeList>,
    );
    expect(component.hasClass('mb-10')).toBeTruthy();
  });

  describe('snapshot', () => {
    test('xs ', () => {
      const component = render(
        <AttributeList size="xs">
          <Attribute name="key" value="value" />
          <Attribute name="term" value="definition" />
        </AttributeList>,
      );
      expect(component).toMatchSnapshot();
    });
    test('sm [default]', () => {
      const component = render(
        <AttributeList>
          <Attribute name="key" value="value" />
          <Attribute name="term" value="definition" />
        </AttributeList>,
      );
      expect(component).toMatchSnapshot();
    });
    test('md', () => {
      const component = render(
        <AttributeList size="md">
          <Attribute name="key" value="value" />
          <Attribute name="term" value="definition" />
        </AttributeList>,
      );
      expect(component).toMatchSnapshot();
    });
    test('lg', () => {
      const component = render(
        <AttributeList size="lg">
          <Attribute name="key" value="value" />
          <Attribute name="term" value="definition" />
        </AttributeList>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
