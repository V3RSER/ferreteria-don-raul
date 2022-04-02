import invoiceServices from "../services/streaming/invoiceService";

export const GENERATE_INVOICE = "invoice/GENERATE_INVOICE";
export const SET_INVOICES = "invoice/SET_INVOICES";

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
  try {
    await invoiceServices.generateInvoice(invoice).then(function (response) {
      dispatch({
        type: GENERATE_INVOICE,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
