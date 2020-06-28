import React from "react";

function CountryPage(props) {
  const country = props.match.params.country;
  return <div className='CountryPage'>countrypage: {country}</div>;
}

export default CountryPage;
