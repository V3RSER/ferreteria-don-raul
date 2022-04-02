import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="light" expand="md" light>
      <NavLink className="navbar-brand" to="/ferreteria-don-raul/vender">
        Vender
      </NavLink>
    </Navbar>
  );
};

export default Header;
