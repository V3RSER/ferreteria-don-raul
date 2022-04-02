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
} from "reactstrap";

const ProductCard = ({
  data,
  add_product,
  remove_product,
  update_product,
  id,
  nombre,
  descripcion,
  precio,
  existencias,
}) => {
  let initialStateInShopingCart;
  let initialStateQuantity;
  if (data.shopingCart.filter((cart) => cart.product.id === id).length) {
    initialStateInShopingCart = true;
    initialStateQuantity = data.shopingCart.filter(
      (cart) => cart.product.id === id
    )[0].quantity;
  } else {
    initialStateInShopingCart = false;
    initialStateQuantity = 1;
  }
  const [inShopingCart, setInShopingCart] = useState(initialStateInShopingCart);
  const [quantity, setQuantity] = useState(initialStateQuantity);

  return (
    <div>
      <Card body color="light">
        <CardBody>
          <CardTitle tag="h5">{nombre}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h5">
            $ {precio}
          </CardSubtitle>
          <CardText className="m-0"> Descripción: </CardText>
          <CardText> {descripcion}</CardText>

          <Input
            className={
              existencias.actual - quantity < existencias.minimo &&
              quantity <= existencias.actual
                ? "mb-2 is-warning"
                : "mb-2"
            }
            type="number"
            placeholder="cantidad"
            invalid={quantity < 1 || quantity > existencias.actual}
            valid={
              quantity >= 1 &&
              quantity <= existencias.actual - existencias.minimo
            }
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
              if (
                inShopingCart &&
                event.target.value > 1 &&
                event.target.value <= existencias.actual
              ) {
                update_product(id, event.target.value);
              }
            }}
            min={1}
          />

          <Button
            block
            color={inShopingCart ? "danger" : "success"}
            outline
            size=""
            onClick={() => {
              if (inShopingCart) {
                remove_product(id);
                setInShopingCart(!inShopingCart);
              } else if (quantity >= 1 && quantity <= existencias.actual) {
                add_product(
                  data.products.filter((product) => product.id === id),
                  quantity
                );
                setInShopingCart(!inShopingCart);
              }
            }}
          >
            {inShopingCart ? "Eliminar" : "Agregar"}
          </Button>
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

export default connect(stateMapToProps, mapDispatchToProps)(ProductCard);
