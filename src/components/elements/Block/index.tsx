import * as React from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface BlockProps {
  children?: React.ReactNode
  className?: string
}

class Block extends React.PureComponent<BlockProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Block />';
  }
};

export { Block };
export default Block;


