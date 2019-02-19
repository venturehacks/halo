import classNames from 'classnames';
import * as React from 'react';
import { SFC } from 'react';

import * as styles from './styles.scss';

export interface IconProps {
  children?: React.ReactNode;
  className?: string;
}

class Icon extends React.PureComponent<IconProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Icon />';
  }
}

export { Icon };
export default Icon;
