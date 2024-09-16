const { default: axiosClient } = require("./axiosClient");

const addToCard = (payload) => axiosClient.post("/carts", payload);

const getUserCartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=images&filters[email][$eq]=${email}`
  );
const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

export default {
  addToCard,
  getUserCartItems,
  deleteCartItem,
};
