import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface BlockProps {
  children?: React.ReactNode;
  className?: string;
}

class Block extends React.PureComponent<BlockProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Block />';
  }
}

export { Block };
export default Block;
