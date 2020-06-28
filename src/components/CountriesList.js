import React from "react";
import CountryPreview from "./CountryPreview";
import "./../style/CountriesList.scss";

const nCountriesToGet = 10;

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
              key={c.alpha2Code}
              id={c.alpha2Code}
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
