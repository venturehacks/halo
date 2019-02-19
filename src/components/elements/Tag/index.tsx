import classNames from 'classnames';
import * as React from 'react';
import { SFC } from 'react';

import * as styles from './styles.scss';

export interface TagProps {
  children?: React.ReactNode;
  className?: string;
}

class Tag extends React.PureComponent<TagProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Tag />';
  }
}

export { Tag };
export default Tag;
