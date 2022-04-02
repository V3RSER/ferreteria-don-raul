import React, { useEffect } from "react";
import { connect } from "react-redux";
import { set_invoice } from "../actions/invoiceAction";
import InvoiceCard from "./InvoiceCard";
import { useParams } from "react-router-dom";

const InvoiceInfo = (props) => {
  let params = useParams();

  useEffect(() => {
    props.set_invoice(params.id);
  }, []);

  return (
    <>
      {props.state.invoice.length && (
        <InvoiceCard
          cliente={props.state.invoice[0].cliente}
          fecha={props.state.invoice[0].fecha}
          total={props.state.invoice[0].total}
          carts={props.state.invoice[0].productos}
        />
      )}
    </>
  );
};

const stateMapToProps = (state) => {
  return {
    state: {
      invoice: state.invoice.invoice,
    },
  };
};

const mapDispatchToProps = {
  set_invoice,
};

export default connect(stateMapToProps, mapDispatchToProps)(InvoiceInfo);
