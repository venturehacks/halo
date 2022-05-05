import { snakeCase, startCase } from 'lodash';
import React from 'react';
import { InterfaceHeader, Checkbox } from '~/components/';

import { LocalExperimentName, useLocalExperimentControl } from '..';

export default function ControlPanel() {
  const [experiments, dispatch] = useLocalExperimentControl();
  const experimentNames = Object.keys(experiments) as LocalExperimentName[];

  return (
    <div className="bg-gray-200 p-4">
      <InterfaceHeader title="Inspector" flow subsection />
      {experimentNames.map((name) => (
        <div key={name} className="mb-2">
          <Checkbox
            key={name}
            checked={experiments[name]}
            id={`LocalExperiment--${name}`}
            label={startCase(snakeCase(name).replace('_', ' '))}
            labelClassName="text-sm leading-none"
            onChange={(_event) => {
              dispatch({
                [name]: !experiments[name],
                type: 'update',
              });
            }}
          />
        </div>
      ))}
    </div>
  );
}
