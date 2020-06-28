import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
import "./style/App.scss";

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
