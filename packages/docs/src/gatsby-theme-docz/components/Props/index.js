/* eslint-disable react/prop-types */
/** @jsx jsx */
import { ChevronDown, ChevronUp } from 'gatsby-theme-docz/src/components/Icons';
import * as styles from 'gatsby-theme-docz/src/components/Props/styles';
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { InlineCode } from '../../custom-components/InlineCode';
import { Container } from './custom-styles';

export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const propType = flowType ? flowType : type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return '[Empty string]';
  }
  if (propType && propType.name === 'string') {
    return defaultValue.value.replace(/'/g, '"');
  }
  if (typeof defaultValue.value === 'object' && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }
  return defaultValue.value;
};

function stripExcessiveUndefinedOnPropType(propType) {
  if (!propType) {
    return propType;
  }

  return propType.replace('| undefined', '');
}

export const Prop = ({ propName, prop, getPropType, isToggle }) => {
  const [showing, setShowing] = useState(isToggle || false);
  if (!prop.type && !prop.flowType) return null;

  const toggle = () => setShowing((s) => !s);
  return (
    <div sx={styles.line} data-testid="prop">
      <div sx={styles.content}>
        <div sx={styles.propName} data-testid="prop-name">
          {propName}
          {prop.required ? '' : '?'}
        </div>
        <div sx={styles.propType} data-testid="prop-type">
          {getPropType(prop)}
        </div>
        {prop.defaultValue && (
          <div sx={styles.defaultValue} data-testid="prop-default-value">
            <em>{getDefaultValue(prop)}</em>
          </div>
        )}
        <div sx={styles.right}>
          {prop.required && (
            <div sx={styles.propRequired} data-testid="prop-required">
              <strong>required</strong>
            </div>
          )}
          {prop.description && (
            <button
              sx={styles.openDescBtn}
              onClick={toggle}
              data-testid="prop-toggle-description"
            >
              {showing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
      </div>
      {showing && prop.description && (
        <div sx={styles.description} data-testid="prop-description">
          {prop.description}
        </div>
      )}
    </div>
  );
};

export const Props = (componentProps) => {
  const { props, table, getPropType } = componentProps;
  const entries = Object.entries(props);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th width="22%">Name</th>
            <th width="30%">Type</th>
            <th width="9%">Default</th>
            <th width="80">Required</th>
            <th width="30%">Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, prop]) => (
            <tr key={key}>
              <td className="font-mono text-xs">
                {key}
                {prop.required ? '' : '?'}
              </td>
              <td>
                <InlineCode>
                  {stripExcessiveUndefinedOnPropType(getPropType(prop))}
                </InlineCode>
              </td>
              <td>
                {getDefaultValue(prop) && (
                  <InlineCode>{getDefaultValue(prop)}</InlineCode>
                )}
              </td>
              <td className="text-center">{prop.required ? '✔' : ''}</td>
              <td className="text-dark-aa max-w-xs text-xs">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );

  // return (
  //   <div sx={styles.container} data-testid="props">
  //     {entries.map(([key, prop]) => (
  //       <Prop
  //         key={key}
  //         propName={key}
  //         prop={prop}
  //         getPropType={getPropType}
  //         isToggle={isToggle}
  //       />
  //     ))}
  //   </div>
  // );
};
