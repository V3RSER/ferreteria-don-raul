import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="warning" expand light>
      <Nav className="me-auto" navbar>
        <NavLink className="navbar-brand" to="/ferreteria-don-raul">
          Vender
        </NavLink>
        <NavLink className="navbar-brand" to="/ferreteria-don-raul/inventario">
          Inventario
        </NavLink>
        <NavLink className="navbar-brand" to="/ferreteria-don-raul/historial">
          Historial
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
