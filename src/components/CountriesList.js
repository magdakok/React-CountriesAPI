import React, { useState, useEffect } from "react";
import CountryPreview from "./CountryPreview";
import Loading from "./Loading";
import "./../style/CountriesList.scss";
import InfiniteScroll from "react-infinite-scroll-component";

function CountriesList(props) {
  const { countries } = props;
  const [displayed, setDisplayed] = useState(new Array(24).fill(null));

  const fetchMoreData = () => {
    setTimeout(() => {
      setDisplayed(displayed.concat(Array.from({ length: 24 })));
      //  setDisplayed(displayed.concat(Array.from({ length: 24 })));
    }, 1500);
  };

  return (
    <main className='CountriesList'>
      {!countries.length ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={displayed.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loading />}>
          {displayed.map((i, index) => (
            <CountryPreview
              country={countries[index].name}
              flag={countries[index].flag}
              population={countries[index].population}
              region={countries[index].subregion}
              capital={countries[index].capital}
              key={countries[index].alpha3Code}
              id={countries[index].alpha3Code}
            />
          ))}
        </InfiniteScroll>
      )}
    </main>
  );
}

export default CountriesList;
