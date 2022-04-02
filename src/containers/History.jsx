import React, { useEffect } from "react";
import { connect } from "react-redux";
import { set_invoices } from "../actions/invoiceAction";
import InvoiceCard from "../components/InvoiceCard";
import Table from "../components/Table";

const Iventory = (props) => {
  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.state.invoices?.length) props.set_invoices();
  }, [props]);
  console.log(props.state);
  return (
    <>
      {props.state.invoices?.map((invoice, index) => (
        <InvoiceCard
        key={index}
          cliente={invoice.cliente}
          fecha={invoice.fecha}
          total={invoice.total}
          carts={invoice.productos}
        />
      ))}
      {/* <Table
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
      /> */}
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      invoices: state.invoice.invoices,
    },
  };
};

const mapDispatchToProps = {
  set_invoices,
};

export default connect(stateMapToProps, mapDispatchToProps)(Iventory);
