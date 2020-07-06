import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setThemeMode] = useState(false);
  const toggleTheme = () => setThemeMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
