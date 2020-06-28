import React from "react";
import "./../style/Navbar.scss";

function Navbar(props) {
  return (
    <nav className='Navbar'>
      <h1 className='main-heading'>Where in the world?</h1>
      <div className='color-mode'>
        <i className='fas fa-moon'></i> Dark Mode
      </div>
    </nav>
  );
}

export default Navbar;
