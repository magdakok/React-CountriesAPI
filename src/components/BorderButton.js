import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./../contexts/ThemeContext";
import "./../style/BorderButton.scss";

function BorderButton(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [countryName, setCountryName] = useState("Loading...");

  useEffect(() => {
    async function getData() {
      const newCountry = await props.getCountry(props.country);
      setCountryName(newCountry.data.name);
    }
    getData();
  }, []);

  return (
    <Link
      exact
      to={`/${props.country}`}
      className={
        isDarkMode
          ? "BorderButton__btn BorderButton__btn--dark"
          : "BorderButton__btn"
      }>
      {countryName}
    </Link>
  );
}

export default BorderButton;
