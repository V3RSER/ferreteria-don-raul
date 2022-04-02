import axios from "../config";

const invoiceServices = () => {
  const generateInvoice = (invoice) => {
    return axios({
      method: "POST",
      url: "/factura",
      data: invoice,
    });
  };

  return { generateInvoice };
};

export default invoiceServices();
