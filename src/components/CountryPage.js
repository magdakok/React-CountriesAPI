import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import "./../style/CountryPage.scss";
import InfoRow from "./InfoRow";
// import Axios from "axios";
// const API_URL = "https://restcountries.eu/rest/v2/";

function CountryPage(props) {
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { code } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      const newCountry = await props.getCountry(code);
      setCountry(await newCountry);
      setIsLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setInfo([
        { "Native Name": country.nativeName },
        {
          Population: country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        },
        { Region: country.region },
        { "Sub Region": country.subregion },
        { Capital: country.capital },
        { "Top Level Domain": country.topLevelDomain.join(", ") },
        {
          Currencies: currenciesToString(country.currencies),
        },
        { Languages: languagesToString(country.languages) },
        { Borders: bordersToString(country.borders) },
      ]);
    }
  }, [isLoading]);

  function currenciesToString(arr) {
    let strings = [];
    arr.forEach((el) => {
      strings.push(`${el.code} ${el.name} (${el.symbol})`);
    });
    return strings.join(", ");
  }

  function languagesToString(arr) {
    let strings = [];
    arr.forEach((el) => {
      strings.push(`${el.name} (${el.nativeName})`);
    });
    return strings.join(", ");
  }

  function bordersToString(arr) {
    let strings = [];
    arr.forEach((el) => {
      strings.push(`${el}`);
    });
    return strings.join(", ");
  }

  let renderMainContent = (
    <div className='CountryPage'>
      <Link to='./'>
        <button className='CountryPage__backButton'>
          <i className='fas fa-long-arrow-alt-left'></i> Back
        </button>
      </Link>
      <div className='CountryPage__container'>
        <div className='CountryPage__flagBox'>
          <img src={country.flag} alt={`Flag of ${country.name}`} />
        </div>
        <div className='CountryPage__infoBox'>
          <h2 className='CountryPage__heading-country'>{country.name}</h2>
          <ul className='CountryPage__info'>
            {info.map((i) => {
              return (
                <InfoRow
                  title={Object.keys(i)[0]}
                  value={Object.values(i)[0]}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  return isLoading ? <Loading /> : renderMainContent;
}

export default CountryPage;
