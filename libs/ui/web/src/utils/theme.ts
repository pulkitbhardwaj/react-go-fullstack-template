import { Key } from "react";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };

  border: {
    radius: Key;
  };

  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}
