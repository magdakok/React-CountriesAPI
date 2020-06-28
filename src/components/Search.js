import React, { Component } from "react";
import "./../style/Search.scss";

function Search(props) {
  return (
    <div className='Search'>
      <form className='Search__form'>
        <input
          className='Search__input'
          type='text'
          placeholder='Search for a country...'
        />
      </form>
    </div>
  );
}

export default Search;
