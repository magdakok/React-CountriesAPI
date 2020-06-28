import React, { useState, useEffect } from "react";
import CountryPreview from "./CountryPreview";
import "./../style/CountriesList.scss";
import Axios from "axios";
import Loading from "./Loading";

const API_URL = "https://restcountries.eu/rest/v2/";
const nCountriesToGet = 10;

function CountriesList(props) {
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(`${API_URL}all`);
      setCountries(response.data);
      setIsLoading(false);
    }
    getData();
  });

  return (
    <main className='CountriesList'>
      {isLoading ? (
        <Loading />
      ) : (
        countries.map((c, i) => {
          if (i < nCountriesToGet) {
            return (
              <CountryPreview
                country={c.name}
                flag={c.flag}
                population={c.population}
                region={c.subregion}
                capital={c.capital}
              />
            );
          } else {
            return;
          }
        })
      )}
    </main>
  );
}

export default CountriesList;
