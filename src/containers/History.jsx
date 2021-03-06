import React, { useEffect } from "react";
import { connect } from "react-redux";
import { set_invoices } from "../actions/invoiceAction";
import InvoiceCard from "../components/InvoiceCard";

const History = (props) => {
  useEffect(() => {
    if (!props.state.invoices?.length) props.set_invoices();
  }, []);
  return (
    <>
      {Array.from(
        props.state.invoices.map((invoice, index) => (
            <InvoiceCard
              key={index}
              cliente={invoice.cliente}
              fecha={invoice.fecha}
              total={invoice.total}
              carts={invoice.productos}
            />
        ))
      ).reverse()}
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      invoices: state.invoice.invoices,
    },
  };
};

const mapDispatchToProps = {
  set_invoices,
};

export default connect(stateMapToProps, mapDispatchToProps)(History);
