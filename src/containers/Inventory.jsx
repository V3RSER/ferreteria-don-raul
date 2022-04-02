import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_products } from "../actions/inventoryAction";
import NavBarSearch from "../components/NavBarSearch";
import Table from "../components/Table";

const Inventory = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!props.state.products?.length) props.set_products();
  }, []);

  return (
    <>
      <NavBarSearch setSearch={setSearch} />

      <Table
        columns={[
          {
            Header: "Información",
            columns: [
              { Header: "Nombre", accessor: "nombre" },
              { Header: "Descripción", accessor: "descripcion" },
              { Header: "Precio", accessor: "precio" },
              { Header: "Proveedor", accessor: "nombreProveedor" },
            ],
          },
          {
            Header: "Existencias",
            columns: [
              { Header: "Actual", accessor: "actual" },
              { Header: "Mínimo", accessor: "minimo" },
              { Header: "Máximo", accessor: "maximo" },
            ],
          },
        ]}
        data={
          search.length
            ? props.state.products
                .filter((product) =>
                  search.length === 1
                    ? product.nombre.toLowerCase().charAt(0) === search
                    : product.nombre
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((product) => {
                  return {
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    precio: product.precio,
                    actual: product.existencias.actual,
                    minimo: product.existencias.minimo,
                    maximo: product.existencias.maximo,
                    nombreProveedor: product.nombreProveedor,
                  };
                })
            : props.state.products?.map((product) => {
                return {
                  nombre: product.nombre,
                  descripcion: product.descripcion,
                  precio: product.precio,
                  actual: product.existencias.actual,
                  minimo: product.existencias.minimo,
                  maximo: product.existencias.maximo,
                  nombreProveedor: product.nombreProveedor,
                };
              })
        }
      />
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      products: state.inventory.products,
    },
  };
};

const mapDispatchToProps = {
  set_products,
};

export default connect(stateMapToProps, mapDispatchToProps)(Inventory);
