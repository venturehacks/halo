import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface HeaderProps {
  /**
   * style-only preset
   * @default none
   */
  preset?:
    | 'none'
    | 'page'
    | 'panel'
    | 'section'
    | 'micro'
    | 'nano'
    | 'huge-headline'
    | 'large-headline'
    | 'medium-headline'
    | 'small-headline'
    | 'micro-headline'
    | 'large-subhead'
    | 'small-subhead';

  /**
   * HTML tag override
   * @default h3
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * include page flow margins
   * @default true
   */
  flow?: boolean;

  className?: string;

  /**
   * <h1 /> semantic preset
   */
  h1?: boolean;

  /**
   * <h2 /> semantic preset
   */
  h2?: boolean;

  /**
   * <h3 /> semantic preset
   */
  h3?: boolean;

  /**
   * <h4 /> semantic preset
   */
  h4?: boolean;

  /**
   * <h5 /> semantic preset
   */
  h5?: boolean;

  /**
   * <h6 /> semantic preset
   */
  h6?: boolean;

  muted?: boolean;

  children: React.ReactNode;
}

function Header({
  flow = true,
  preset = 'none',
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  muted = false,
  tag = 'h3',
  children,
  className,
}: HeaderProps) {
  const classes = classNames(
    styles.component,
    // Marketing presets
    preset === 'huge-headline' && styles.presetHugeHeadline,
    (h1 || preset === 'large-headline') && styles.presetLargeHeadline,
    (h2 || preset === 'medium-headline') && styles.presetMediumHeadline,
    (h3 || preset === 'small-headline') && styles.presetSmallHeadline,
    (h4 || preset === 'micro-headline') && styles.presetMicroHeadline,
    preset === 'large-subhead' && styles.presetLargeSubhead,
    preset === 'small-subhead' && styles.presetSmallSubhead,
    // Interface presets
    preset === 'page' && styles.presetPage,
    preset === 'panel' && styles.presetPanel,
    preset === 'section' && styles.presetSection,
    (h5 || preset === 'micro') && styles.presetMicro,
    (h6 || preset === 'nano') && styles.presetNano,

    flow && styles.flow,
    muted && styles.muted,
    className,
  );

  tag = (h1 && 'h1') || tag;
  tag = (h2 && 'h2') || tag;
  tag = (h3 && 'h3') || tag;
  tag = (h4 && 'h4') || tag;
  tag = (h5 && 'h5') || tag;
  tag = (h6 && 'h6') || tag;

  const props = {
    className: classes,
  };

  return React.createElement(tag, props, children);
}

export { Header };
