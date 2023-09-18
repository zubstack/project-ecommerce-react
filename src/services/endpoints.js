// const baseUrl = "https://api.escuelajs.co/api/v1/products";
const baseUrl = "http://localhost:4000";

const endpoints = {
  getAll: `${baseUrl}/api/products`,
  getProduct: (id) => `${baseUrl}/api/products/${id}`,
};

export default endpoints;
