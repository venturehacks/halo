import classNames from 'classnames';
import * as React from 'react';
import { SFC } from 'react';

import * as styles from './styles.scss';

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
}

class Label extends React.PureComponent<LabelProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Label />';
  }
}

export { Label };
export default Label;
