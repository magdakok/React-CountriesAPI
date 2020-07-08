import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import "./../style/Navbar.scss";

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={isDarkMode ? "Navbar Navbar--dark" : "Navbar"}>
      <h1 className='main-heading'>Where in the world?</h1>
      <div
        className={isDarkMode ? "color-mode color-mode--dark" : "color-mode"}
        onClick={toggleTheme}>
        <i className='fas fa-moon'></i>{" "}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </nav>
  );
}

export default Navbar;
