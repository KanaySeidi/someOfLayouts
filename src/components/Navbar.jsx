import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav__list">
      <Link to="/">
        <button className="nav__btn">Главная страница</button>
      </Link>
      <Link to="/maket1">
        <button className="nav__btn">Cloud Budget Freebie</button>
      </Link>
      <Link to="/maket2">
        <button className="nav__btn">Lasles VPN</button>
      </Link>
      <Link to="/maket3">
        <button className="nav__btn">Financial Dashboard</button>
      </Link>
    </div>
  );
};

export default Navbar;
