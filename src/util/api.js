import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API_KEY= 'LyTgHZN12qqHF2PxLsDAk5t8';

export default {

  getProducts: function(category = 'abcat0401000') {
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
  },

  getCategories: function() {
    return axios.get(`https://api.bestbuy.com/v1/categories?apiKey=${API_KEY}&format=json&pageSize=10`);
  }

};
