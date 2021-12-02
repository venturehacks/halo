import classNames from 'classnames';
import React from 'react';

export interface TabGroupProps<T, TabComponentProps extends React.ComponentProps<'a'>> {
  children?: React.ReactNode;
  className?: string;
  onTabClick?: (() => void) | ((tab: Tab<T, TabComponentProps>) => void);
  tabComponent?: React.ComponentType<TabComponentProps>;
  tabs: Tab<T, TabComponentProps>[];
  variant?: 'normal' | 'no-margin' | 'pills';
}

interface TabAnchorProps<T> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  attentionIndicator?: boolean;
  className?: string;
  // disabled?: boolean;
  flair?: string | number; // flair to display beside tab name
  label: string;
  value?: T;
}

export type Tab<T = string, TabComponentProps extends {} = {}> = Omit<TabComponentProps, keyof TabAnchorProps<T>> & TabAnchorProps<T>;

import styles from './styles.scss';

export function TabGroup<T = string, TabComponentProps = any>({
  className,
  onTabClick,
  tabs,
  variant,
  children,
  tabComponent: TabComponent,
}: TabGroupProps<T, TabComponentProps>) {
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
        <TabComponent
          key={tab.label}
          aria-label={tab.label}
          className={classNames(
            tab.className,
            tab.active === undefined &&
              tab.route === currentRoute &&
              styles.active,
            tab.active && styles.active,
          )}
          data-test={`TabGroup-Tab--${tab.label}`}
          disabled={tab.disabled}
          onClick={onTabClick ? () => onTabClick(tab) : undefined}
          params={tab.params}
          route={tab.route}
          track={tab.track}
        >
          <>
          {tab.label}
          {tab.flair != null && (
            <span className={styles.flair}>
              {typeof tab.flair === 'number'
                ? formatNumberCompact(tab.flair)
                : tab.flair}
            </span>
          )}
          {tab.badge && (
            <div className={styles.badgeContainer}>
              <div className={styles.badge}> </div>
            </div>
          )}
          </>
        </Anchor>
      ))}
      {children}
    </nav>
}
