import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_clients } from "../actions/clientAction";
import QuantityInput from "../compontents/QuantityInput";
import Table from "../compontents/Table";
import { Navbar, Input, Button, Collapse } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Sell = (props) => {
  const [search, setSearch] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.data.clients?.length) props.set_clients();
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
      <Button
        color="primary"
        onClick={() => setShowUsers(!showUsers)}
        style={{
          marginBottom: "1rem",
        }}
      >
        Seleccionar usuario
      </Button>
      <Collapse className={showUsers ? "show" : ""}>
      </Collapse>
      <Table
        columns={[
          {
            Header: "Carrito",
            columns: [
              { Header: "Nombre", accessor: "nombre" },
              { Header: "Descripción", accessor: "descripcion" },
              { Header: "Precio", accessor: "precio" },
              { Header: "Unidades", accessor: "quantity" },
              { Header: "Total", accessor: "total" },
            ],
          },
        ]}
        data={
          search.length
            ? props.data.shopingCart
                .filter((cart) =>
                  search.length === 1
                    ? cart.product.nombre.toLowerCase().charAt(0) === search
                    : cart.product.nombre
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((cart) => {
                  return {
                    nombre: cart.product.nombre,
                    descripcion: cart.product.descripcion,
                    precio: "$ " + cart.product.precio,
                    actual: cart.product.existencias.actual,
                    quantity: (
                      <QuantityInput
                        product={cart.product}
                        quantity={cart.quantity}
                      ></QuantityInput>
                    ),
                    total: "$ " + cart.product.precio * cart.quantity,
                  };
                })
            : props.data.shopingCart?.map((cart) => {
                return {
                  nombre: cart.product.nombre,
                  descripcion: cart.product.descripcion,
                  precio: "$ " + cart.product.precio,
                  actual: cart.product.existencias.actual,
                  quantity: (
                    <QuantityInput
                      product={cart.product}
                      quantity={cart.quantity}
                    ></QuantityInput>
                  ),
                  total: "$ " + cart.product.precio * cart.quantity,
                };
              })
        }
      />
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    data: {
      clients: state.client.clients,
      shopingCart: state.sell.shopingCart,
    },
  };
};

const mapDispatchToProps = {
  set_clients,
};

export default connect(stateMapToProps, mapDispatchToProps)(Sell);
