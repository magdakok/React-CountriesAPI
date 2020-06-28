import React from "react";
import "./../style/Search.scss";

window.FontAwesomeConfig = {
  searchPseudoElements: true,
};

function Search(props) {
  return (
    <div className='Search'>
      <div className='Search__container'>
        <form className='Search__form'>
          <input
            className='Search__input'
            type='text'
            placeholder='Search for a country...'
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
