import { render } from 'enzyme';
import React from 'react';

import { RawInput } from '../../RawInput';
import { RawRadio } from '../../RawRadio';
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
          <RawRadio
            id="chocolate"
            label="Chocolate"
            onChange={() => {}}
            checked
          />
          <RawRadio id="vanilla" label="Vanilla" />
          <RawRadio id="strawberry" label="Strawberry" />
        </Label>,
      ),
    ).toThrowError();
  });

  describe('snapshot', () => {
    test('standard', () => {
      const component = render(
        <Label byline="Who are you?" title="Name">
          <RawInput />
        </Label>,
      );
      expect(component).toMatchSnapshot();
    });

    test('containsFieldGroup', () => {
      const component = render(
        <Label byline="Who are you?" title="Name" containsFieldGroup>
          <RawRadio
            id="chocolate"
            label="Chocolate"
            onChange={() => {}}
            checked
          />
          <RawRadio id="vanilla" label="Vanilla" />
          <RawRadio id="strawberry" label="Strawberry" />
        </Label>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
