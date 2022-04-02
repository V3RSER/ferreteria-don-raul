import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
} from "reactstrap";
import { add_client } from "../actions/clientAction";

const UserCreate = ({ add_client }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Card className="my-3">
      <CardHeader className="text-center"><h4>Registro de nuevo usuario</h4></CardHeader>
      <CardBody>
          <Label>Nombre</Label>
          <Input className="mw-100"
            value={name}  
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Label>Documento</Label>
          <Input className="mw-100"
            value={document}
            onChange={(event) => {
              setDocument(event.target.value);
            }}
          />
          <Label>Celular</Label>
          <Input className="mw-100"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
      </CardBody>
      <CardFooter>
        <Button
          block
          color="success"
          outline
          onClick={() => {
            add_client({
              nombre: name,
              celular: phone,
              documentoIdentidad: document,
            });
          }}
        >
          Crear usuario
        </Button>
      </CardFooter>
    </Card>
  );
};

const mapDispatchToProps = {
  add_client,
};

export default connect(null, mapDispatchToProps)(UserCreate);
