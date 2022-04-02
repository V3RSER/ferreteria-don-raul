import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_products } from "../actions/inventoryAction";
import ProductList from "./ProductList";
import NavBarSell from "../components/NavBarSell";
const Sell = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    //TODO implementar lógica de carga
    if (!props.state.products?.length) props.set_products();
  }, [props]);

  return (
    <>
      <NavBarSell setSearch={setSearch} />
      <ProductList
        products={
          search.length
            ? props.state.products.filter((product) =>
                search.length === 1
                  ? product.nombre.toLowerCase().charAt(0) === search
                  : product.nombre.toLowerCase().includes(search.toLowerCase())
              )
            : props.state.products
        }
      />
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      products: state.inventory.products,
      shopingCart: state.sell.shopingCart,
    },
  };
};

const mapDispatchToProps = {
  set_products,
};

export default connect(stateMapToProps, mapDispatchToProps)(Sell);
