import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
  classNames?: string;
  initialTheme?: string[];
  theme: "light" | "dark";
  setTheme: Function;
}
