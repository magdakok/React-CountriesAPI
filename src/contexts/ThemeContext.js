import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setThemeMode] = useState(
    JSON.parse(window.localStorage.getItem("theme") || false)
  );
  const toggleTheme = () => {
    window.localStorage.setItem("theme", JSON.stringify(!isDarkMode));
    setThemeMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
