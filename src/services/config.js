import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-ferreteria.herokuapp.com/api/",
});

export default instance;
