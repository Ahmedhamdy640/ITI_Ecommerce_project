const { default: axiosClient }= require("./axiosClient");



const addToCard = (payload)=>axiosClient.post('/carts',payload);


export default{
    addToCard,
};