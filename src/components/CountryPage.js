import React from "react";

function CountryPage(props) {
  const {
    flag,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = props.country;
  return (
    <div className='CountryPage'>
      <button>
        <i className='fas fa-long-arrow-alt-left'></i> BACK
      </button>{" "}
      {(name, population)}
    </div>
  );
}

export default CountryPage;
