import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface TagProps {
  children?: React.ReactNode
  className?: string
}

class Tag extends React.PureComponent<TagProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Tag />';
  }
};

export { Tag };
export default Tag;


