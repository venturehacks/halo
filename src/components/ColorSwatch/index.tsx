import classNames from 'classnames';
import * as React from 'react';

import { Header } from '../elements/Header';

import * as styles from './styles.scss'

interface ColorSwatchProps {
  className?: string;
  children?: React.ReactNode;
  color: string;
  name: string;
}

function ColorSwatch({
  name,
  color,
  children,
  className,
}: ColorSwatchProps) {
  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.color} style={{ backgroundColor: color }} />
      <Header flow={false} h6>{name}</Header>
      <div className={styles.attributes}>
        {color}
      </div>
    </div>
  )
}

export { ColorSwatch, ColorSwatchProps };
