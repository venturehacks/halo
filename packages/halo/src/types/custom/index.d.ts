declare module '*.scss' {
  interface ClassNamesIdentity {
    [className: string]: string;
  }
  const classNames: ClassNamesIdentity;
  export = classNames;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
