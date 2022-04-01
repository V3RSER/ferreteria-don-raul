import axios from "../config";

const inventoryServices = () => {
  const getProducts = () => {
    return axios({
      method: "GET",
      url: "/productos",
    });
  };

  return {
    getProducts,
  };
};

export default inventoryServices();
