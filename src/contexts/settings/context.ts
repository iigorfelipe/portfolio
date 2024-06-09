import { createContext } from "react";

export type Theme = 'light' | 'dark';

export type SettingsContext = {
  theme: Theme;
  oppositeTheme: Theme;
  toggleTheme: () => void;
  isSmDown: boolean;
  isMdDown: boolean;
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
};

export const defaultSettingsValues: SettingsContext = {
  theme: 'light',
  oppositeTheme: 'dark',
  toggleTheme: () => {},
  isSmDown: false,
  isMdDown: false,
  lang: 'en',
  setLang: () => {},
}

export const SettingsContext = createContext<SettingsContext>(defaultSettingsValues);
