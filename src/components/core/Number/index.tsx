import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface NumberProps {
  children?: React.ReactNode;
  className?: string;
}

class Number extends React.PureComponent<NumberProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Number />';
  }
}

export { Number };
export default Number;
