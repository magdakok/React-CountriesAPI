import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryPage from "./components/CountryPage";
import "./style/App.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={CountriesList} />
        <Route exact path='/:country' component={CountryPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
