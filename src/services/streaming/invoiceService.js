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

  const getInvoice = (id) => {
    return axios({
      method: "GET",
      url: "/factura/" + id,
    });
  };

  return { generateInvoice, getInvoices, getInvoice };
};

export default invoiceServices();
