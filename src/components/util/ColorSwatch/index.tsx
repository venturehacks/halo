import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface ColorSwatchProps {
  backgroundColor?: 'white' | 'black';
  children?: React.ReactNode;
  className?: string;
  color?: string; // force color override
  name?: string;
  showVariable?: boolean;
  swatch?: string; // swatch in Halo palette; ex: grey--200
}

function ColorSwatch({
  backgroundColor = 'white',
  name,
  color,
  swatch,
  className,
  showVariable = true,
}: ColorSwatchProps) {
  return (
    <div
      className={classNames(
        styles.component,
        styles[swatch],
        backgroundColor === 'white' && showVariable && styles.backgroundWhite,
        backgroundColor === 'black' && showVariable && styles.backgroundBlack,
        className,
      )}
    >
      <div className={styles.color} style={{ backgroundColor: color }} />
      <span className={styles.name}>{name}</span>
      {showVariable && (
        <div className={styles.attributes}>{swatch ? `$${swatch}` : color}</div>
      )}
    </div>
  );
}

export { ColorSwatch };
