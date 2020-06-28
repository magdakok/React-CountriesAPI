import React from "react";
import "./../style/NotFound.scss";

function NotFound() {
  return (
    <div className='NotFound'>
      <i className='NotFound-icon far fa-compass'></i>
      <span className='NotFound-text'>Page not found</span>
    </div>
  );
}

export default NotFound;
