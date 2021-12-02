import classNames from 'classnames';
import React from 'react';

export interface TabGroupProps<T> {
  children?: React.ReactNode;
  className?: string;
  onTabClick?: (() => void) | ((tab: Tab<T>) => void);
  renderTab?:
    (props: Omit<Tab<T>, 'label'> ) => JSX.Element;
  tabs: Tab<T>[];
  variant?: 'normal' | 'no-margin' | 'pills';
}

export interface Tab<T> extends React.HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  attentionIndicator?: boolean;
  className?: string;
  flair?: string | number; // flair to display beside tab name
  label: string;
  value?: T;
  ['data-test']?: string;
}

import styles from './styles.scss';

export function TabGroup<T = string>({
  className,
  onTabClick,
  tabs,
  variant,
  children,
  renderTab,
}: TabGroupProps<T>) {
  return (
    <nav
      className={classNames(
        styles.component,
        className,
        variant === 'no-margin' && styles.noMargin,
        variant === 'pills' && styles.pills,
      )}
    >
      {tabs.map((tab: Tab<T>) => (
        renderTab({
          disabled: tab.disabled,
          onClick: onTabClick ? () => onTabClick(tab) : undefined,
          'data-test': `TabGroup-Tab--${tab.label}`,
          className: classNames(
            tab.className,
            tab.active && styles.active,
          ),
          children: (
            <React.Fragment key={tab.label}>
              {tab.label}
              {tab.flair != null && (
                <span className={styles.flair}>
                  {typeof tab.flair === 'number'
                    ? Intl.NumberFormat(undefined, { minimumIntegerDigits: 1, maximumFractionDigits: 0 }).format(tab.flair)
                    : tab.flair}
                </span>
              )}
              {tab.attentionIndicator && (
                <div className={styles.badgeContainer}>
                  <div className={styles.badge}> </div>
                </div>
              )}
          </React.Fragment>
          )
        })))}
      {children}
    </nav>
}
