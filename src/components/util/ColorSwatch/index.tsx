import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface ColorSwatchProps {
  children?: React.ReactNode;
  className?: string;
  color?: string; // force color override
  name?: string;
  showVariable?: boolean;
  swatch?: string; // swatch in Halo palette; ex: grey--xxlight
}

function ColorSwatch({
  name,
  color,
  swatch,
  className,
  showVariable = true,
}: ColorSwatchProps) {
  return (
    <div className={classNames(styles.component, styles[swatch], className)}>
      <div className={styles.color} style={{ backgroundColor: color }} />
      <span className={styles.name}>
        {name}
        {!name && swatch && getNameFromSwatch(swatch)}
      </span>
      {showVariable && (
        <div className={styles.attributes}>{swatch ? `$${swatch}` : color}</div>
      )}
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
