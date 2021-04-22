import React from 'react';
import PropTypes from "prop-types";
// import "./header.css"


const Header = ()=>{
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">Запоминай английские слова быстро</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
};

export default Header;

