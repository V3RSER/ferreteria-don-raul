import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import Table from "./Table";

const InvoiceCard = (props) => {
  return (
    <div>
      <Card body color="light">
        <CardBody>
          <CardText className="m-0">Cliente: {props.cliente}</CardText>
          <CardText className="m-0">Fecha: {props.fecha}</CardText>
          {props.carts !== undefined ? (
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
          ) : (
            ""
          )}

          <CardText>Total: $ {props.total}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default InvoiceCard;
