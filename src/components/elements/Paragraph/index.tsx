import classNames from 'classnames';
import * as React from 'react';
import { SFC } from 'react';

import * as styles from './styles.scss';

export interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
}

class Paragraph extends React.PureComponent<ParagraphProps> {
  static defaultProps = {
    variant: 'primary',
    size: 'regular',
    disabled: false,
  };

  render(): React.ReactNode {
    return '<Paragraph />';
  }
}

export { Paragraph };
export default Paragraph;
