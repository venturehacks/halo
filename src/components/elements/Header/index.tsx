import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

class Header extends React.PureComponent<HeaderProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Header />';
  }
};

export { Header };
export default Header;


