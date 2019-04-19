import classNames from 'classnames';
import * as React from 'react';
import { Span } from '~/components/core/Span';

import * as styles from './styles.scss';

export interface ColorSwatchProps {
  className?: string;
  children?: React.ReactNode;
  swatch?: string;
  color: string;
  name: string;
}

function ColorSwatch({ name, color, swatch, className }: ColorSwatchProps) {
  return (
    <div className={classNames(styles.component, styles[swatch], className)}>
      <div className={styles.color} style={{ backgroundColor: color }} />
      <Span className={styles.name} semibold block>
        {swatch ? getNameFromSwatch(swatch) : name}
      </Span>
      <div className={styles.attributes}>{swatch ? `$${swatch}` : color}</div>
    </div>
  );
}

function getNameFromSwatch(swatch: string) {
  const [color, variant] = swatch.split('--');
  let intensity = '';
  let direction = '';
  if (variant) {
    const n = (variant.match(/x/g) || []).length;

    for (let i = 0; i < n; i++) {
      intensity += 'X';
    }
    const matches = variant.match(/[x]*(dark|light)/);
    direction = matches !== null ? matches[1] : '';
  }
  return [color, intensity, direction].join(' ');
}

export { ColorSwatch };
