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
        {!props.state.loading && props.state.invoice.length >= 1 && (
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              navigate(
                "/ferreteria-don-raul/factura/" + props.state.invoice[0].id
              );
            }}
          >
            Ver factura
          </Button>
        )}
        {props.state.invoice.length === 0 && (
          <Button
            color="success"
            onClick={() => {
              if (props.state.shopingCart.length) {
                props.generate_invoice({
                  carrito: props.state.shopingCart.flatMap(function (cart) {
                    cart.cantidad = cart.quantity;
                    return cart;
                  }),
                  vendedor: "Vendedor",
                  cliente: props.state.buyer.nombre,
                });
                props.state.shopingCart.map((cart) =>
                  props.reduce_stock(cart.product.id, cart.quantity)
                );
                props.clear_products();
              }
            }}
          >
            Generar factura
          </Button>
        )}
      </Collapse>
    </Navbar>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      shopingCart: state.sell.shopingCart,
      buyer: state.sell.buyer,
      invoice: state.invoice.invoice,
      loading: state.view.loading,
    },
  };
};

const mapDispatchToProps = {
  generate_invoice,
  clear_products,
  reduce_stock,
};

export default connect(stateMapToProps, mapDispatchToProps)(NavBarSell);
