import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import "./../style/CountryPage.scss";
import InfoRow from "./InfoRow";
import NotFound from "./NotFound";
import BorderButton from "./BorderButton";

function CountryPage(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { code } = useParams();
  const [info, setInfo] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const newCountry = await props.getCountry(code);
      if (!newCountry) {
        setNotFound(true);
        setIsLoading(false);
      } else {
        setCountry(newCountry.data);
        setIsLoading(false);
      }
    }
    getData();
  }, [code]);

  useEffect(() => {
    if (!isLoading && !notFound) {
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

  let renderMainContent = notFound ? (
    <NotFound />
  ) : (
    <>
      <div className='CountryPage__flagBox'>
        <img src={country.flag} alt={`Flag of ${country.name}`} />
      </div>
      <div className='CountryPage__infoBox'>
        <h2 className='CountryPage__heading-country'>{country.name}</h2>
        <ul className='CountryPage__info'>
          {info.map((i, idx) => {
            return (
              <InfoRow
                title={Object.keys(i)[0]}
                value={Object.values(i)[0]}
                key={idx}
              />
            );
          })}
        </ul>
        <div className='CountryPage__borders'>
          <span>Borders: </span>
          {country.borders &&
            country.borders.map((c) => {
              return <BorderButton country={c} getCountry={props.getCountry} />;
            })}
        </div>
      </div>
    </>
  );

  return (
    <div className='CountryPage'>
      {console.log("CountryPage rerenders with code: " + code)}
      <Link to='./'>
        <button
          className={
            isDarkMode
              ? "CountryPage__backButton CountryPage__backButton--dark"
              : "CountryPage__backButton"
          }>
          <i className='fas fa-long-arrow-alt-left'></i> Back
        </button>
      </Link>
      <div className='CountryPage__container'>
        {isLoading ? <Loading /> : renderMainContent}
      </div>
    </div>
  );
}

export default CountryPage;
