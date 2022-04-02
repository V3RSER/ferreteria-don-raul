import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_clients } from "../actions/clientAction";
import { set_buyer } from "../actions/sellAction";
import QuantityInput from "../components/QuantityInput";
import Table from "../components/Table";
import {
  Navbar,
  Input,
  Button,
  Collapse,
  ButtonGroup,
  NavbarBrand,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import UserCreate from "../components/UserCreate";
import { generate_invoice } from "../actions/invoiceAction";
import { clear_products } from "../actions/sellAction";
import { NavLink } from "react-router-dom";


const Invoice = (props) => {
  const [searchProduct, setSearchProduct] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [showCart, setShowCart] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.data.clients?.length) props.set_clients();
  }, [props]);

  const createInvoice = () => {
    if (props.data.shopingCart.length) {
      props.generate_invoice({
        carrito: props.data.shopingCart.flatMap(function (cart) {
          cart.cantidad = cart.quantity;
          return cart;
        }),
        vendedor: "vendedor",
        cliente: props.data.buyer.nombre,
      });
      props.generate_invoice();
      navigate("/ferreteria-don-raul/factura/" + props.data.invoice.id);
    }
  };
  return (
    <>
          <Navbar color="dark" dark expand="sm" fixed="" light>
        <NavLink className="navbar-brand" to="/ferreteria-don-raul/vender">
          Productos
        </NavLink>
                <Button
          color="success"
          onClick={() => createInvoice()}
        >
          Generar factura
        </Button>
      </Navbar>
      <ButtonGroup>
        <Button
          color="info"
          onClick={() => {
            setShowUsers(!showUsers);
          }}
          style={{
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          {showUsers ? "Ocultar " : "Mostrar "} usuarios
        </Button>
        <Button
          color="warning"
          onClick={() => setShowCart(!showCart)}
          style={{
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          {showCart ? "Ocultar " : "Mostrar "} carrito
        </Button>
      </ButtonGroup>
      <Collapse className={showUsers ? "show" : ""}>
        <UserCreate />
        <Navbar color="info" expand="sm" fixed="" light>
          <NavbarBrand>Usuarios</NavbarBrand>
          <Input
            className="mx-3"
            type="text"
            placeholder="Búsqueda por nombre"
            value={searchUser}
            onChange={(event) => {
              setSearchUser(event.target.value);
            }}
          />
        </Navbar>
        <Table
          columns={[
            { Header: "", accessor: "seleccionar" },
            { Header: "Nombre", accessor: "nombre" },
            {
              Header: "Documento de identidad",
              accessor: "documentoIdentidad",
            },
            { Header: "Celular", accessor: "celular" },
          ]}
          data={
            searchUser.length
              ? props.data.clients
                  .filter((client) =>
                    searchUser.length === 1
                      ? client.nombre.toLowerCase().charAt(0) === searchUser
                      : client.nombre
                          .toLowerCase()
                          .includes(searchUser.toLowerCase())
                  )
                  .map((client) => {
                    return {
                      seleccionar: (
                        <Input
                          type="radio"
                          name="user"
                          onChange={() => {
                            props.set_buyer(client);
                          }}
                          value={props.data.buyer?.id === client.id}
                        />
                      ),
                      nombre: client.nombre,
                      documentoIdentidad: client.documentoIdentidad,
                      celular: client.celular,
                    };
                  })
              : props.data.clients?.map((client) => {
                  return {
                    seleccionar: (
                      <Input
                        type="radio"
                        name="user"
                        onChange={() => {
                          props.set_buyer(client);
                        }}
                        value={props.data.buyer?.id === client.id}
                      />
                    ),
                    nombre: client.nombre,
                    documentoIdentidad: client.documentoIdentidad,
                    celular: client.celular,
                  };
                })
          }
        />
      </Collapse>

      <Collapse className={showCart ? "show" : ""}>
        <Navbar color="warning" expand="sm" fixed="" light>
          <NavbarBrand>Productos</NavbarBrand>
          <Input
            className="mx-3"
            type="text"
            placeholder="Búsqueda por nombre"
            value={searchProduct}
            onChange={(event) => {
              setSearchProduct(event.target.value);
            }}
          />
        </Navbar>
        <Table
          columns={[
            { Header: "Nombre", accessor: "nombre" },
            { Header: "Descripción", accessor: "descripcion" },
            { Header: "Precio", accessor: "precio" },
            { Header: "Unidades", accessor: "quantity" },
            { Header: "Total", accessor: "total" },
          ]}
          data={
            searchProduct.length
              ? props.data.shopingCart
                  .filter((cart) =>
                    searchProduct.length === 1
                      ? cart.product.nombre.toLowerCase().charAt(0) ===
                        searchProduct
                      : cart.product.nombre
                          .toLowerCase()
                          .includes(searchProduct.toLowerCase())
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
      </Collapse>
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    data: {
      clients: state.client.clients,
      shopingCart: state.sell.shopingCart,
      buyer: state.sell.buyer,
      invoice: state.invoice.invoice,
    },
  };
};

const mapDispatchToProps = {
  set_clients,
  set_buyer,
  generate_invoice,
  clear_products,
};

export default connect(stateMapToProps, mapDispatchToProps)(Invoice);
