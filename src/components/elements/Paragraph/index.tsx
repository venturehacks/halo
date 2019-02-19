import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'
import classNames from 'classnames'

export interface ParagraphProps {
  children?: React.ReactNode
  className?: string
}

class Paragraph extends React.PureComponent<ParagraphProps> {
  public static defaultProps = {
    variant: 'primary',
    size: 'regular',
    disabled: false,
  };

  public render(): React.ReactNode {
    return '<Paragraph />'
  }
};

export { Paragraph };
export default Paragraph;


