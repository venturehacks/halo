declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

/**
 * Dictionary of string => T value pairs
 */
export interface Dictionary<T> {
  [key: string]: T;
}

type ReactEventT = React.ChangeEvent<any>;
type EventFunctionT = (e: React.ChangeEvent<any>) => void;
