import axios from "axios";

// const BASE_URL = "https://dummyjson.com";
// fetch('https://fakestoreapi.com/products')

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
};
