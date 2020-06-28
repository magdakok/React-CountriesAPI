import React from "react";
import "./../style/Loading.scss";

function Loading() {
  return (
    <div className='Loading'>
      <i className='Loading-icon fas fa-globe-americas'></i>
      <span className='Loading-text'>Loading countries...</span>
    </div>
  );
}

export default Loading;
