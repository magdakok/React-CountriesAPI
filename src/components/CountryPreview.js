import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import { Link } from "react-router-dom";
import "./../style/CountryPreview.scss";

function CountryPreview(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const populationWithComas = props.population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link to={`${props.id}`}>
      <div
        className={
          isDarkMode ? "CountryPreview CountryPreview--dark" : "CountryPreview"
        }>
        <img
          className='CountryPreview__flag'
          src={props.flag}
          alt={`Flag of ${props.country}`}
        />
        <div className='CountryPreview__box'>
          <div className='CountryPreview__info'>
            <h2 className='CountryPreview__heading-country'>{props.country}</h2>
            {props.population > 0 && (
              <div className='CountryPreview__row'>
                <h3 className='CountryPreview__heading-minor'>Population:</h3>
                {populationWithComas}
              </div>
            )}
            {props.region && (
              <div className='CountryPreview__row'>
                <h3 className='CountryPreview__heading-minor'>Region:</h3>
                {props.region}
              </div>
            )}
            {props.capital && (
              <div className='CountryPreview__row'>
                <h3 className='CountryPreview__heading-minor'>Capital:</h3>
                {props.capital}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryPreview;
