import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1/products";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const get = (id) => {};

export default { getAll, get };
