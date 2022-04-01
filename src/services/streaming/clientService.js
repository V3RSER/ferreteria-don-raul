import axios from "../config";

const clientServices = () => {
  const getClients = () => {
    return axios({
      method: "GET",
      url: "/clientes",
    });
  };

  const addClient = (client) => {
    return axios({
      method: "POST",
      url: "/cliente",
      data: client,
    });
  };

  return {
    getClients,
  };
};

export default clientServices();
