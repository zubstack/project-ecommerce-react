const baseUrl = import.meta.env.VITE_BASE_URL;

const endpoints = {
  getAll: `${baseUrl}/api/v1/products`,
  getProduct: (id) => `${baseUrl}/api/v1/products/${id}`,
  loginUser: `${baseUrl}/api/v1/users/login`,
};

export default endpoints;
