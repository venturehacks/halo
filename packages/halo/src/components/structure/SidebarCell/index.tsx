import classNames from 'classnames';
import React from 'react';

import { StarOutlineIcon, StarSolidIcon } from '../../icons';
import { Bracket } from "../Bracket";

import styles from './styles.module.scss';

export interface SidebarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  byline: string;
  /**
   * Arbitrary content that appears underneath title/byline.
   */
  children?: React.ReactNode;
  className?: string;
  /**
   * Appears above title, 2xs muted type.
   */
  header?: React.ReactNode;
  /**
   * Selected cell makes title medium, adds 'selected' dot left of title.
   */
  isSelected?: boolean;
  isStarred?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * Renders star button adjacent to title.
   */
  onStarClick?: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

function SidebarCell({
  isSelected,
  byline,
  children,
  className,
  header,
  onClick,
  isStarred,
  onStarClick,
  title,
  ...divElementProps
}: SidebarCellProps) {
  const titleLabel = (
    <div
      className={classNames(
        'text-sm',
        isSelected && styles.selected,
        onStarClick ? 'max-w-80' : 'max-w-full',
      )}
    >
      <div className="truncate">{title}</div>
    </div>
  );

  const onClickProps = onClick
    ? {
        onClick,
        role: 'menuitem',
        tabIndex: 0,
      }
    : {};

  return (
    <div
      aria-label={title}
      className={classNames(
        'flex flex-col justify-start content-start px-6 py-4 border-b border-slate-200 hover:bg-slate-300 rounded cursor-pointer',
        styles.component,
        className,
      )}
      data-test="SidebarCell"
      {...onClickProps}
      {...divElementProps}
    >
      {header && <Bracket className="text-2xs text-dark-a">{header}</Bracket>}

      {/* Given callback, pair titleLabel with button */}
      {onStarClick ? (
        <Bracket>
          {titleLabel}
          <button
            aria-checked={isStarred}
            aria-label={`Star '${title}'`}
            onClick={(e) => {
              e.stopPropagation();
              onStarClick(e);
            }}
            role="switch"
          >
            {isStarred ? <StarSolidIcon /> : <StarOutlineIcon />}
          </button>
        </Bracket>
      ) : (
        titleLabel
      )}

      {(byline || children) && (
        <div className="text-xs text-dark-aa">
          {byline && <div>{byline}</div>}
          {children}
        </div>
      )}
    </div>
  );
}

export { SidebarCell };
