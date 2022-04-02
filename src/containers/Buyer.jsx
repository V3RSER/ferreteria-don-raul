import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_clients } from "../actions/clientAction";
import { set_buyer } from "../actions/sellAction";
import Table from "../components/Table";
import NavBarSell from "../components/NavBarSell";
import { Input } from "reactstrap";
import UserCreate from "../components/UserCreate";

const Buyer = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!props.data.clients?.length) props.set_clients();
  }, []);

  return (
    <>
      <NavBarSell setSearch={setSearch} />
      <div className="row">
        <div className="col-md-7">
          <Table
            columns={[
              {
                Header: "Documento",
                accessor: "documentoIdentidad",
              },
              { Header: "Celular", accessor: "celular" },
              { Header: "Nombre", accessor: "nombre" },
              { Header: "Seleccionar", accessor: "seleccionar" },
            ]}
            data={
              search.length
                ? props.data.clients
                    .filter((client) =>
                      search.length === 1
                        ? client.nombre.toLowerCase().charAt(0) === search
                        : client.nombre
                            .toLowerCase()
                            .includes(search.toLowerCase())
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
                          addon
                          aria-label="Checkbox for following text input"
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
        </div>
        <div className="col-md-4">
          <UserCreate />
        </div>
      </div>
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
  set_buyer,
};

export default connect(stateMapToProps, mapDispatchToProps)(Buyer);
