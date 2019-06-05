// *NOTE:* this Overwite is not the same as the one offered by utility-types!
// Make a single property optional
// https://stackoverflow.com/a/46941824
// prettier-ignore
export type Overwrite<T1, T2> = {
  [P in Exclude<keyof T1, keyof T2>]: T1[P]
} & T2;

// The following utility types are borrowed from
// https://github.com/sw-yx/react-typescript-cheatsheet/blob/master/ADVANCED.md#section-0-utility-types

/**
 * Subtract keys from one interface from the other.
 *
 * @example
 * interface One { one: string }
 * interface Three { one: string, two: string }
 *
 * type Two = Omit<Three, keyof One>;
 *
 * The type of Two will be
 * interface Two { two: string }
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U
export type Filter<T, U> = T extends U ? T : never; // Remove types from T that are not assignable to U

/**
 * Remove from T the keys that are in common with K
 */
export type Optionalize<T extends K, K> = Omit<T, keyof K>;

/**
 * Make a Type into a Maybe Type
 */
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;

/**
 * Dictionary of string, value pairs
 */
export interface Dictionary<T> {
  [key: string]: T;
}
