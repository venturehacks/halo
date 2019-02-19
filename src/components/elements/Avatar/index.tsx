import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

class Avatar extends React.PureComponent<AvatarProps> {
  static defaultProps = {};

  render(): React.ReactNode {
    return '<Avatar />';
  }
}

export { Avatar };
export default Avatar;
