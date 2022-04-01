import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../actions/inventoryAction";

const Iventory = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    if (!props.state.products?.length) {
      dispatch(setProducts());
    }
  }, [dispatch, props.state.products]);

  return (
    <>
      <h2>Inventario</h2>
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

export default connect(stateMapToProps)(Iventory);
