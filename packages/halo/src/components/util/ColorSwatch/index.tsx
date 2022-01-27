import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
// NOTE(drew): react-copy-to-clipboard is only used for
// the documentation site, and thus is only required in devDependencies
// eslint-disable-next-line import/no-extraneous-dependencies
// tslint:disable-next-line: no-implicit-dependencies
import CopyToClipboard from 'react-copy-to-clipboard';

import { Color, ColorPalette } from '../../../lib/colors';
import { Tooltip } from '../../core/Tooltip';

import styles from './styles.module.scss';

export interface ColorSwatchProps {
  backgroundColor?: 'white' | 'black';
  children?: React.ReactNode;
  className?: string;
  color?: string; // force color override
  showVariable?: boolean;
  swatch?: Color; // swatch in Halo palette; ex: grey-200
}

function ColorSwatch({
  backgroundColor = 'white',
  color,
  swatch,
  className,
  showVariable = true,
}: ColorSwatchProps) {
  const [tipMessage, setTipMessage] = useState('Copied!');
  const handleCopy = useCallback(
    (text: string) => setTipMessage(`Copied ${text}`),
    [setTipMessage],
  );

  return (
    <Tooltip
      content={tipMessage}
      onShow={instance => {
        setTimeout(() => {
          instance.hide();
        }, 1500);
      }}
      trigger="click"
    >
      <div
        className={classNames(
          styles.component,
          `halo-colorswatch-${swatch}`,
          backgroundColor === 'white' && showVariable && styles.backgroundWhite,
          backgroundColor === 'black' && showVariable && styles.backgroundBlack,
          className,
        )}
      >
        <CopyToClipboard
          onCopy={handleCopy}
          text={swatch ? ColorPalette[swatch] : color}
        >
          <div className={styles.color} style={{ backgroundColor: color }} />
        </CopyToClipboard>

        {swatch && (
          <CopyToClipboard onCopy={handleCopy} text={ColorPalette[swatch]}>
            <div className={styles.hex}>{ColorPalette[swatch]}</div>
          </CopyToClipboard>
        )}

        {showVariable && (
          <CopyToClipboard
            onCopy={handleCopy}
            text={swatch ? `$${swatch}` : color}
          >
            <div className={styles.variableName}>
              {swatch ? `$${swatch}` : color}
            </div>
          </CopyToClipboard>
        )}
      </div>
    </Tooltip>
  );
}

export { ColorSwatch };
