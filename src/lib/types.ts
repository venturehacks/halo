/**
 * Utility Types
 */
type Maybe<T> = T | undefined;
type Nullable<T> = T | undefined | null;

/**
 * Convenience types
 */

interface Dictionary<T> {
  [key: string]: T;
}
