import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API_KEY = "LyTgHZN12qqHF2PxLsDAk5t8";

export default {
  getProducts: async function(category = "abcat0401000") {
    console.log(category);
    return axios.get(
      `https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`
    );
  },

  getCategories: async function() {
    return axios.get(
      `https://api.bestbuy.com/v1/categories?apiKey=${API_KEY}&format=json&pageSize=10`
    );
  },

  createProduct: async function(product) {
    console.log(product);
    return axios.post("/api/wishlist", product);
  },

  getApiProducts: async function() {
    // return Promise.resolve(['t', 't2']);
    return axios.get("/api/wishlist");
  }
};
