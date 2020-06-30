import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../style/CountryPage.scss";

function CountryPage(props) {
  const [country, setCountry] = useState("");
  const { code } = useParams();

  useEffect(() => {
    async function getData() {
      const newCountry = await props.getCountry(code);
      setCountry(newCountry);
    }
    getData();
  }, []);

  // const info = [
  //   { "Native Name": nativeName },
  //   { Population: population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") },
  //   { Region: region },
  //   { "Sub Region": subregion },
  //   { Capital: capital },
  //   { "Top Level Domain": topLevelDomain.join(", ") },
  //   {
  //     Currencies:
  //       currencies.length > 1
  //         ? "a lot"
  //         : `${currencies[0].code}: ${currencies[0].name} (${currencies[0].symbol})`,
  //   },
  //   { Languages: languages },
  //   { Borders: borders },
  // ];
  // console.log(info);

  //  TO FUTURE MAGDA: make helper function that returns nice array with formatted data to strings!
  return (
    <div className='CountryPage'>
      {/* <button className='CountryPage__backButton'>
        <i className='fas fa-long-arrow-alt-left'></i> Back
      </button>{" "}
      <div className='CountryPage__container'>
        <div className='CountryPage__flagBox'>
          <img src={flag} alt={`Flag of ${name}`} />
        </div>
        <div className='CountryPage__infoBox'>
          <h2 className='CountryPage__heading-country'>{name}</h2>
          <ul className='CountryPage__info'>
           
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default CountryPage;
