import React, { useState } from "react";
import { Navbar, Input, Collapse, Nav } from "reactstrap";

const NavBarSearch = (props) => {
  const [search, setSearch] = useState("");

  return (
    <Navbar color="dark" dark expand light>
      <Collapse navbar>
        <Nav className="me-auto" navbar></Nav>
        <Nav className="me-auto" navbar>
          <Input
            className="mx-3"
            type="text"
            placeholder="Búsqueda por nombre"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              props.setSearch(event.target.value);
            }}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBarSearch;
