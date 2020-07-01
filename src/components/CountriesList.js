import React from "react";
import CountryPreview from "./CountryPreview";
import "./../style/CountriesList.scss";

const nCountriesToGet = 40;

function CountriesList(props) {
  const { countries } = props;
  return (
    <main className='CountriesList'>
      {countries.map((c, i) => {
        if (i < nCountriesToGet) {
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
        } else {
          return;
        }
      })}
    </main>
  );
}

export default CountriesList;
