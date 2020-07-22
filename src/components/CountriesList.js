import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import CountryPreview from "./CountryPreview";
import "./../style/CountriesList.scss";

function CountriesList(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { countries } = props;
  return (
    <main
      className={
        isDarkMode ? "CountriesList CountriesList--dark" : "CountriesList"
      }>
      {countries.map((c, i) => {
        return (
          <CountryPreview
            country={c.name}
            flag={c.flag}
            population={c.population}
            region={c.region}
            capital={c.capital}
            key={c.alpha3Code}
            id={c.alpha3Code}
          />
        );
      })}
    </main>
  );
}

export default CountriesList;
