import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface IconProps {
  children?: React.ReactNode
  className?: string
}

class Icon extends React.PureComponent<IconProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Icon />';
  }
};

export { Icon };
export default Icon;


