import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryPage from "./components/CountryPage";
import NotFound from "./components/NotFound";
import "./style/App.scss";
import Axios from "axios";
import Loading from "./components/Loading";

const API_URL = "https://restcountries.eu/rest/v2/";

function App() {
  const initCountries = JSON.parse(
    window.localStorage.getItem("countries") || "[]"
  );

  const [countries, setCountries] = useState(initCountries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (countries.length === 0) {
      async function getData() {
        const response = await Axios.get(`${API_URL}all`);
        setCountries(response.data);
        window.localStorage.setItem("countries", JSON.stringify(countries));
      }
      getData();
    }
    setIsLoading(false);
  });

  const pickCountry = (props) => {
    let pickedDcountry = props.match.params.country;
    let currentCountry = countries.find((c) => {
      return (
        //just first word from the string and lowercase
        c.name.replace(/ .*/, "").toLowerCase() === pickedDcountry.toLowerCase()
      );
    });
    if (currentCountry === undefined) {
    } else {
      return <CountryPage {...props} country={currentCountry} />;
    }
  };

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return isLoading ? (
              <Loading />
            ) : (
              <CountriesList countries={countries} />
            );
          }}
        />
        <Route exact path='/:country' render={pickCountry} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
