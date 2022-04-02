import React, { useEffect } from "react";
import { connect } from "react-redux";
import { set_products } from "../actions/inventoryAction";
import Table from "../components/Table";

const Iventory = (props) => {
  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.state.products?.length) props.set_products();
  }, [props]);

  return (
    <>
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
          {
            Header: "Actions",
            accessor: "actions",
            Cell: (props) => {
              const rowIdx = props.row.id;
              return (
                <div>
                  {/* <span onClick={() => editProduct(rowIdx)}>
                    <i className="far fa-edit action mr-2"></i>
                  </span>

                  <span onClick={() => deleteProduct(rowIdx)}>
                    <i className="fas fa-trash action"></i>
                  </span> */}
                </div>
              );
            },
          },
        ]}
        data={props.state.products?.map((product) => {
          return {
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            actual: product.existencias.actual,
            minimo: product.existencias.minimo,
            maximo: product.existencias.maximo,
            nombreProveedor: product.nombreProveedor,
          };
        })}
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

export default connect(stateMapToProps, mapDispatchToProps)(Iventory);
