import React from "react";
import "./../style/CountryPreview.scss";

function CountryPreview(props) {
  return (
    <div className='CountryPreview'>
      <img
        className='CountryPreview__flag'
        src={props.flag}
        alt={`Flag of ${props.country}`}
      />
      <div className='CountryPreview__info'>
        <h2 className='CountryPreview__heading-country'>{props.country}</h2>
        {props.population && (
          <div className='CountryPreview__row'>
            <h3 className='CountryPreview__heading-minor'>Population:</h3>
            {props.population}
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
  );
}

export default CountryPreview;
