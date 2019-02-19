import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface LabelProps {
  children?: React.ReactNode
  className?: string
}

class Label extends React.PureComponent<LabelProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Label />';
  }
};

export { Label };
export default Label;


