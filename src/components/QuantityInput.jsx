import React, { useState } from "react";
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { remove_product, update_product } from "../actions/sellAction";

const QuantityInput = ({
  remove_product,
  update_product,
  product,
  quantity,
}) => {
  const [quantityHook, setQuantityHook] = useState(quantity);

  return (
    <Input
      className={
        product?.existencias.actual - quantityHook <
          product.existencias.minimo &&
        quantityHook <= product.existencias.actual
          ? "mb-2 is-warning"
          : "mb-2"
      }
      type="number"
      placeholder="cantidad"
      invalid={quantityHook < 1 || quantityHook > product.existencias.actual}
      valid={
        quantityHook >= 1 &&
        quantityHook <= product.existencias.actual - product.existencias.minimo
      }
      value={quantityHook}
      onChange={(event) => {
        if (event.target.value < 1) remove_product(product.id);
        setQuantityHook(event.target.value);
        if (
          event.target.value >= 1 &&
          event.target.value <= product.existencias.actual
        ) {
          update_product(product.id, event.target.value);
        }
      }}
      min={0}
      max={product.existencias.actual}
    />
  );
};

const mapDispatchToProps = {
  remove_product,
  update_product,
};

export default connect(null, mapDispatchToProps)(QuantityInput);
