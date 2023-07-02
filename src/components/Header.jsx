import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="<%=require('../images/logo.svg')%>"
        alt="Лого Mesto"
      />
    </header>
  );
}

export default Header;
