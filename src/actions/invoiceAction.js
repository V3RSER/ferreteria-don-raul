import invoiceServices from "../services/streaming/invoiceService";
import { LOADED, LOADING } from "../actions/viewAction";

export const GENERATE_INVOICE = "invoice/GENERATE_INVOICE";
export const SET_INVOICES = "invoice/SET_INVOICES";
export const SET_INVOICE = "invoice/SET_INVOICE";
export const CLEAR_INVOICE = "invoice/CLEAR_INVOICE";

export const set_invoices = () => async (dispatch) => {
  try {
    await invoiceServices.getInvoices().then(function (response) {
      dispatch({
        type: SET_INVOICES,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const generate_invoice = (invoice) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    await invoiceServices.generateInvoice(invoice).then(function (response) {
      dispatch({
        type: GENERATE_INVOICE,
        payload: response.data,
      });
      dispatch({
        type: LOADED,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const set_invoice = (id) => async (dispatch) => {
  try {
    await invoiceServices.getInvoice(id).then(function (response) {
      dispatch({
        type: SET_INVOICE,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const clear_invoice = () => async (dispatch) => {
  dispatch({
    type: CLEAR_INVOICE,
  });
};
