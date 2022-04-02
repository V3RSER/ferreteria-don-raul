import axios from "../config";

const inventoryServices = () => {
  const getProducts = () => {
    return axios({
      method: "GET",
      url: "/productos",
    });
  };

  const reduceStock = (id, quantity) => {
    return axios({
      method: "PUT",
      url: "/producto/" + id + "/reduce/" + quantity,
    });
  };

  return {
    getProducts,
    reduceStock,
  };
};

export default inventoryServices();
