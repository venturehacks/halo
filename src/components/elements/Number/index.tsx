import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface NumberProps {
  children?: React.ReactNode
  className?: string
}

class Number extends React.PureComponent<NumberProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Number />';
  }
};

export { Number };
export default Number;


