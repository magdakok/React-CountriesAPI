import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import "./../style/Loading.scss";

function Loading() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className='Loading'>
      <i
        className={
          isDarkMode
            ? "Loading-icon Loading-icon--dark fas fa-globe-americas"
            : "Loading-icon fas fa-globe-americas"
        }></i>
      <span className='Loading-text'>Loading countries...</span>
    </div>
  );
}

export default Loading;
