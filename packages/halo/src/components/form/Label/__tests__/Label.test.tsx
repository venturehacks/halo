import { render } from 'enzyme';
import React from 'react';

import { Input } from '../../Input';
import { Radio } from '../../Radio';
import { Label } from '../index';

describe('Label', () => {
  test('smoke', () => {
    const component = render(<Label byline="Who are you?" title="Name" />);

    expect(component.text()).toContain('Name');
    expect(component.text()).toContain('Who are you?');
  });

  test('field group without containsFieldGroup throws', () => {
    expect(() =>
      render(
        <Label byline="Who are you?" title="Name">
          <Radio id="chocolate" label="Chocolate" onChange={() => {}} checked />
          <Radio id="vanilla" label="Vanilla" />
          <Radio id="strawberry" label="Strawberry" />
        </Label>,
      ),
    ).toThrowError();
  });

  describe('snapshot', () => {
    test('standard', () => {
      const component = render(
        <Label byline="Who are you?" title="Name">
          <Input />
        </Label>,
      );
      expect(component).toMatchSnapshot();
    });

    test('containsFieldGroup', () => {
      const component = render(
        <Label byline="Who are you?" title="Name" containsFieldGroup>
          <Radio id="chocolate" label="Chocolate" onChange={() => {}} checked />
          <Radio id="vanilla" label="Vanilla" />
          <Radio id="strawberry" label="Strawberry" />
        </Label>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
