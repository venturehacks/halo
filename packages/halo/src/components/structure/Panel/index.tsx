import classNames from 'classnames';
import React from 'react';

import { InterfaceHeader } from '../InterfaceHeader';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Panel byline. If you need full visual control, omit title and just use children.
   */
  byline?: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Include natural content flow bottom margin
   * @default false
   */
  flow?: boolean;
  /**
   * Magnitude of negative space
   * @default md
   */
  negativeSpace?: 'sm' | 'md';
  /**
   * Panel title. If you need full visual control, omit title and just use children.
   */
  title?: string;
}

function Panel({
  flow,
  children,
  className,
  negativeSpace = 'md',
  title,
  byline,
  ...divElementProps
}: PanelProps) {
  const hasGapClassName = className?.includes('gap-');
  const hasMaxWidthClassName = className?.includes('max-w-');

  return (
    <div
      className={classNames(
        'flex flex-col border-t border-slate-100 rounded shadow-md bg-white',
        !hasMaxWidthClassName && 'max-w-3xl',
        negativeSpace === 'sm' && 'p-6 pt-4',
        negativeSpace === 'md' && 'p-8 pt-6',
        flow && negativeSpace === 'sm' && 'mb-4',
        flow && negativeSpace === 'md' && 'mb-6',
        className,
      )}
      {...divElementProps}
    >
      {title && (
        <InterfaceHeader
          byline={byline}
          flow={!hasGapClassName}
          title={title}
          section
        />
      )}
      {children}
    </div>
  );
}

export { Panel };
