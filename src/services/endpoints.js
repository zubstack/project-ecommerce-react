// const baseUrl = "https://api.escuelajs.co/api/v1/products";
const baseUrl = "http://localhost:4000";

const endpoints = {
  getAll: `${baseUrl}/api/products`,
  getProduct: (id) => `${baseUrl}/api/products/${id}`,
};

// const getAll = () => {
//   // const request = axios.get(baseUrl);
//   // return request.then((response) => response.data);
//   axios
//     .get(baseUrl)
//     .then((data) => {
//       console.log("data", data);
//       return data;
//     })
//     .catch((error) => {
//       console.log(error);
//       return error;
//     });
// };

// axios
//   .get("https://ecommerce-api-8vjd.onrender.com/api/products")
//   .then((data) => console.log("data", data))
//   .catch((error) => {
//     console.log(error);
//   });

export default endpoints;
