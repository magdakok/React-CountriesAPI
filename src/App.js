import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryPage from "./components/CountryPage";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import "./style/App.scss";
import Axios from "axios";
import Loading from "./components/Loading";

const API_URL = "https://restcountries.eu/rest/v2/";

function App() {
  const initCountries = JSON.parse(
    window.localStorage.getItem("countries") || "[]"
  );

  const [countries, setCountries] = useState(initCountries);
  const [filteredCountries, setFilteredCountries] = useState("");
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
  }, [countries]);

  const filterCountries = (value) => {
    let updatedCountries = countries.filter((c) => {
      return c.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredCountries(updatedCountries);
  };

  let renderMainContent = (
    <>
      <Search filterCountries={filterCountries} />
      <CountriesList
        countries={filteredCountries.length ? filteredCountries : countries}
      />
    </>
  );

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return isLoading ? <Loading /> : renderMainContent;
          }}
        />
        {/* <Route exact path='/:code'>
          <CountryPage />
        </Route> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
