import React, { useState } from "react";
import { connect } from "react-redux";
import {
  add_product,
  remove_product,
  update_product,
} from "../actions/sellAction";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Input,
  List,
} from "reactstrap";
import Table from "./Table";

const InvoiceCard = (props) => {
  console.log(props);
  return (
    // <List type="unstyled">
    //   <li>Cliente: {props.cliente}</li>
    //   <li>Fecha: {props.fecha}</li>
    //   <li>
    //     Productos
    //     <ul>
    // <Table
    //   columns={[
    //     {
    //       Header: "Productos",
    //       columns: [
    //         { Header: "Nombre", accessor: "nombre" },
    //         { Header: "Descripción", accessor: "descripcion" },
    //         { Header: "Precio", accessor: "precio" },
    //         { Header: "Cantidad", accessor: "cantidad" },
    //         { Header: "Total", accessor: "total" },
    //       ],
    //     },
    //   ]}
    //   data={props.carts?.map((cart) => {
    //     return {
    //       nombre: cart.product.nombre,
    //       descripcion: cart.product.descripcion,
    //       precio: "$ " + cart.product.precio,
    //       cantidad: cart.cantidad,
    //       total: "$ " + cart.total,
    //     };
    //   })}
    // />
    //     </ul>
    //   </li>
    //   <li>Vendedor: {props.vendedor}</li>
    //   <li>Total: $ {props.total}</li>
    // </List>
    <div>
      <Card body color="light">
        <CardBody>
          <CardText className="m-0">Cliente: {props.cliente}</CardText>
          <CardText className="m-0">Fecha: {props.fecha}</CardText>
          <Table
            columns={[
              {
                Header: "Productos",
                columns: [
                  { Header: "Nombre", accessor: "nombre" },
                  { Header: "Descripción", accessor: "descripcion" },
                  { Header: "Precio", accessor: "precio" },
                  { Header: "Cantidad", accessor: "cantidad" },
                  { Header: "Total", accessor: "total" },
                ],
              },
            ]}
            data={props.carts?.map((cart) => {
              return {
                nombre: cart.product.nombre,
                descripcion: cart.product.descripcion,
                precio: "$ " + cart.product.precio,
                cantidad: cart.cantidad,
                total: "$ " + cart.total,
              };
            })}
          />
          <CardText>Total: $ {props.total}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const stateMapToProps = (state) => {
  return {
    data: {
      products: state.inventory.products,
      shopingCart: state.sell.shopingCart,
    },
  };
};

const mapDispatchToProps = {
  add_product,
  remove_product,
  update_product,
};

export default connect(stateMapToProps, mapDispatchToProps)(InvoiceCard);
