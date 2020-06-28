import React, { Component } from "react";
import "./../style/Navbar.scss";

function Navbar(props) {
  return (
    <nav class='Navbar'>
      <h1 className='main-heading'>Where in the world?</h1>
      <div className='color-mode'>Dark Mode</div>
    </nav>
  );
}

export default Navbar;
