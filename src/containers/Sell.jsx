import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { set_products } from "../actions/inventoryAction";
import { clear_invoice } from "../actions/invoiceAction";
import ProductList from "./ProductList";
import NavBarSell from "../components/NavBarSell";
import { Spinner } from "reactstrap";

const Sell = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.clear_invoice();
    if (!props.state.products?.length) props.set_products();
  }, []);

  return (
    <>
      <NavBarSell setSearch={setSearch} />

      {props.state.loading && <Spinner>Loading...</Spinner>}
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
      loading: state.view.loading,
    },
  };
};

const mapDispatchToProps = {
  set_products,
  clear_invoice,
};

export default connect(stateMapToProps, mapDispatchToProps)(Sell);
