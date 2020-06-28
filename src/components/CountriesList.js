import React, { useState, useEffect } from "react";
import "./../style/CountriesList.scss";
import Axios from "axios";

const API_URL = "https://restcountries.eu/rest/v2/";
const nCountriesToGet = 20;

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
        <div className='CountriesList__loading'>
          <i class='CountriesList__loading-icon fas fa-globe-americas'></i>
          <span className='CountriesList__loading-text'>
            Loading countries...
          </span>
        </div>
      ) : (
        <h2> NOT LOADING</h2>
      )}
    </main>
  );
}

export default CountriesList;
