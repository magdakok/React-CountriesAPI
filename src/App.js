import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryPage from "./components/CountryPage";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Sort from "./components/Sort";
import "./style/App.scss";
import Axios from "axios";
import Loading from "./components/Loading";
import { ThemeContext } from "./contexts/ThemeContext";

const API_URL = "https://restcountries.eu/rest/v2/";

function App(props) {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("nameAZ");
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (countries.length === 0) {
      async function getData() {
        const response = await Axios.get(`${API_URL}all`);
        setCountries(response.data);
      }
      getData();
    }

    setIsLoading(false);
    filterCountries();
  }, [countries]);

  const filterCountries = (value) => {
    if (!value) return setFilteredCountries(countries);
    let updatedCountries = countries.filter((c) => {
      return c.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredCountries(updatedCountries);
  };

  const getCountry = async (code) => {
    let response;
    try {
      response = await Axios.get(`${API_URL}alpha/${code}`);
    } catch (error) {
      response = false;
    } finally {
      return response;
    }
  };

  useEffect(() => {
    const sortArray = () => {
      let sorted;
      switch (sortType) {
        case "nameAZ":
          sorted = [...countries].sort((a, b) => {
            if (a["name"] < b["name"]) {
              return -1;
            }
            if (b["name"] < a["name"]) {
              return 1;
            }
            return 0;
          });
          break;
        case "nameZA":
          sorted = [...countries].sort((a, b) => {
            if (a["name"] > b["name"]) {
              return -1;
            }
            if (b["name"] > a["name"]) {
              return 1;
            }
            return 0;
          });
          break;
        case "populationLTH":
          sorted = [...countries].sort(
            (a, b) => a["population"] - b["population"]
          );
          break;
        case "populationHTL":
          sorted = [...countries].sort(
            (a, b) => b["population"] - a["population"]
          );
          break;
      }
      setCountries(sorted);
      setFilteredCountries(sorted);
    };

    sortArray();
  }, [sortType]);

  const sortCountries = (type) => {
    setSortType(type);
  };

  let renderMainContent = (
    <>
      <div className='SearchSort__container'>
        <Search filterCountries={filterCountries} />
        <Sort sortCountries={sortCountries} />
      </div>

      {countries.length !== 0 ? (
        <CountriesList countries={filteredCountries} />
      ) : (
        <Loading />
      )}
    </>
  );

  return (
    <div className={isDarkMode ? "App App--dark" : "App"}>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return isLoading ? <Loading /> : renderMainContent;
          }}
        />
        <Route exact path='/:code'>
          <CountryPage getCountry={getCountry} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
