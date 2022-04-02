import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Button, Input, Collapse, Nav } from "reactstrap";
import { connect } from "react-redux";
import { generate_invoice } from "../actions/invoiceAction";
import { clear_products } from "../actions/sellAction";
import { reduce_stock } from "../actions/inventoryAction";

const NavBarSell = (props) => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  return (
    <Navbar color="dark" dark expand light>
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavLink className="navbar-brand" to="/ferreteria-don-raul">
            Productos
          </NavLink>
          <NavLink className="navbar-brand" to="/ferreteria-don-raul/carrito">
            Carrito
          </NavLink>
          <NavLink className="navbar-brand" to="/ferreteria-don-raul/comprador">
            Comprador
          </NavLink>
        </Nav>
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
        <Button
          color="success"
          onClick={() => {
            if (props.data.shopingCart.length) {
              props.generate_invoice({
                carrito: props.data.shopingCart.flatMap(function (cart) {
                  cart.cantidad = cart.quantity;
                  return cart;
                }),
                vendedor: "vendedor",
                cliente: props.data.buyer.nombre,
              });
              navigate("/ferreteria-don-raul/factura/" + props.data.invoice.id);

              props.data.shopingCart.map((cart) =>
                props.reduce_stock(cart.product.id, cart.quantity)
              );
              props.clear_products();
            }
          }}
        >
          Generar factura
        </Button>
      </Collapse>
    </Navbar>
  );
};

const stateMapToProps = (state) => {
  return {
    data: {
      shopingCart: state.sell.shopingCart,
      buyer: state.sell.buyer,
      invoice: state.invoice.invoice,
    },
  };
};

const mapDispatchToProps = {
  generate_invoice,
  clear_products,
  reduce_stock,
};

export default connect(stateMapToProps, mapDispatchToProps)(NavBarSell);
