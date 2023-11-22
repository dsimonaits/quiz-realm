import { FC, createContext, useContext, useState } from "react";
import { Categories } from "../types/types";

interface IThemeProvider {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: Categories;
  switchTheme: (newTheme: Categories) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Categories>("JavaScript");

  const switchTheme = (newTheme: Categories) => {
    setTheme(newTheme);
  };

  const value: IThemeContext = {
    theme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
