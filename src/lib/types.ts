/**
 * Utility Types
 */
type Maybe<T> = T | undefined;
type Nullable<T> = T | undefined | null;

// Make a single property optional
// prettier-ignore
type Overwrite<T1, T2> = {
  [P in Exclude<keyof T1, keyof T2>]: T1[P]
} & T2;

/**
 * Convenience types
 */

interface Dictionary<T> {
  [key: string]: T;
}

type StringObjectT = Dictionary<string>;
type ReactEventT = React.ChangeEvent<any>;
type ReactDragEventT = React.DragEvent<any>;
type EventFunctionT = React.ChangeEventHandler<any>;
