import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

class Avatar extends React.PureComponent<AvatarProps> {
  public static defaultProps = {
  };

  public render(): React.ReactNode {
    return '<Avatar />';
  }
};

export { Avatar };
export default Avatar;


