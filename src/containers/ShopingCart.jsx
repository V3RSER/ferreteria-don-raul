import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_clients } from "../actions/clientAction";
import QuantityInput from "../components/QuantityInput";
import Table from "../components/Table";
import NavBarSell from "../components/NavBarSell";

const ShopingCart = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!props.data.clients?.length) props.set_clients();
  }, []);

  return (
    <>
      <NavBarSell setSearch={setSearch} />
      <Table
        columns={[
          { Header: "Nombre", accessor: "nombre" },
          { Header: "Descripción", accessor: "descripcion" },
          { Header: "Precio", accessor: "precio" },
          { Header: "Unidades", accessor: "quantity" },
          { Header: "Total", accessor: "total" },
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

export default connect(stateMapToProps, mapDispatchToProps)(ShopingCart);
