import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_products } from "../actions/inventoryAction";
import ProductList from "./ProductList";
import { Navbar, Input, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Sell = (props) => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.state.products?.length) props.set_products();
  }, [props]);

  return (
    <>
      <Navbar color="dark" dark expand="sm" fixed="" light>
        <NavLink className="navbar-brand" to="/ferreteria-don-raul/vender">
          Productos
        </NavLink>
        <Input
          className="mx-3"
          type="text"
          placeholder="Búsqueda por nombre"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button
          color="primary"
          onClick={() => {
            navigate("/ferreteria-don-raul/factura");
          }}
        >
          Factura
        </Button>
      </Navbar>
      <ProductList
        products={
          search.length
            ? props.state.products.filter((product) =>
                search.length === 1
                  ? product.nombre.toLowerCase().charAt(0) === search
                  : product.nombre.toLowerCase().includes(search.toLowerCase())
              )
            : props.state.products
        }
      />
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      products: state.inventory.products,
      shopingCart: state.sell.shopingCart,
    },
  };
};

const mapDispatchToProps = {
  set_products,
};

export default connect(stateMapToProps, mapDispatchToProps)(Sell);
