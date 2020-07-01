import React from "react";
import CountryPreview from "./CountryPreview";
import "./../style/CountriesList.scss";

function CountriesList(props) {
  const { countries } = props;
  return (
    <main className='CountriesList'>
      {countries.map((c, i) => {
        if (i < 50) {
          return (
            <CountryPreview
              country={c.name}
              flag={c.flag}
              population={c.population}
              region={c.subregion}
              capital={c.capital}
              key={c.alpha3Code}
              id={c.alpha3Code}
            />
          );
        }
      })}
    </main>
  );
}

export default CountriesList;
