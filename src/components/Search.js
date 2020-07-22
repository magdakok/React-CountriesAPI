import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import "./../style/Search.scss";
import useInputState from "./../hooks/useInputState";

function Search(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const [value, handleChange] = useInputState("");

  useEffect(() => {
    props.filterCountries(value);
  }, [value]);

  return (
    <div className='Search'>
      <div className='Search__container'>
        <form className='Search__form' onSubmit={(e) => e.preventDefault()}>
          <input
            className={
              isDarkMode ? "Search__input Search__input--dark" : "Search__input"
            }
            type='text'
            placeholder='Search for a country...'
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
