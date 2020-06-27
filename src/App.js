import React from "react";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import CountriesList from "./CountriesList/CountriesList";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <CountriesList />
    </div>
  );
}

export default App;
