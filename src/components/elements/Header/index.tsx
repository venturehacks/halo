import classNames from 'classnames';
import * as React from 'react';
import { SFC } from 'react';

import * as styles from './styles.scss';

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

class Header extends React.PureComponent<HeaderProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Header />';
  }
}

export { Header };
export default Header;
