declare module '*.scss' {
  interface ClassNamesIdentity {
    [className: string]: string;
  }
  const classNames: ClassNamesIdentity;
  export = classNames;
}
