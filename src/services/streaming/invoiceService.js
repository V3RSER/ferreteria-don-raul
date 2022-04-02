import axios from "../config";

const invoiceServices = () => {
  const getInvoices = () => {
    return axios({
      method: "GET",
      url: "/facturas",
    });
  };

  const generateInvoice = (invoice) => {
    return axios({
      method: "POST",
      url: "/factura",
      data: invoice,
    });
  };

  return { generateInvoice, getInvoices};
};

export default invoiceServices();
