import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1> Expense App</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/add" activeClassName="is-active">
      Add Expenses
    </NavLink>

    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);
export default Header;
