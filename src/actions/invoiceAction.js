import invoiceServices from "../services/streaming/invoiceService";

export const GENERATE_INVOICE = "invoice/GENERATE_INVOICE";

export const generate_invoice = (invoice) => async (dispatch) => {
  console.log(invoice)
  try {
    await invoiceServices.generateInvoice(invoice).then(function (response) {
      console.log(response)
      dispatch({
        type: GENERATE_INVOICE,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
