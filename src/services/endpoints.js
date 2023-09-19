// const baseUrl = "https://api.escuelajs.co/api/v1/products";
const baseUrl = import.meta.env.VITE_BASE_URL;

const endpoints = {
  getAll: `${baseUrl}/api/products`,
  getProduct: (id) => `${baseUrl}/api/products/${id}`,
};

export default endpoints;
