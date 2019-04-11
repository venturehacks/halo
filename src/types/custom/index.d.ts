import { FormikContext } from 'formik';

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

/**
 * Dictionary of string, value pairs
 */
interface Dictionary<T> {
  [key: string]: T;
}

type ReactEventT = React.ChangeEvent<any>;
type EventFunctionT = (e: React.ChangeEvent<any>) => void;

interface FormikContextProps {
  formik: FormikContext<Dictionary<string>>;
}
