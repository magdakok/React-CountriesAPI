import React, { useEffect } from "react";
import "./../style/Sort.scss";
import useInputState from "../hooks/useInputState";

function Sort(props) {
  const [value, handleChange] = useInputState("nameAZ");

  useEffect(() => {
    props.sortCountries(value);
  }, [value]);

  return (
    <div className='Sort'>
      <div className='Sort__container'>
        <form className='Sort__form' onSubmit={(e) => e.preventDefault()}>
          <select className='Sort__select' onChange={handleChange}>
            <option value='nameAZ'>Country name A-Z</option>
            <option value='nameZA'>Country name Z-A</option>
            <option value='populationLTH'>Population low to high</option>
            <option value='populationHTL'>Population high to low</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Sort;
