import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface ParagraphProps {
  preset?: 'normal' | 'support' | 'micro' | 'error';
  flow?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Paragraph({
  flow = false,
  preset = 'normal',
  children,
  className,
}: ParagraphProps) {
  const classes = classNames(
    styles.component,
    preset === 'support' && styles.presetSupport,
    preset === 'micro' && styles.presetMicro,
    preset === 'error' && styles.presetError,
    flow && styles.flow,
    className,
  );

  return <p className={classes}>{children}</p>;
}

export { Paragraph };
