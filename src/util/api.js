import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getData: function() {
    return axios.get("https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=LyTgHZN12qqHF2PxLsDAk5t8&format=json");
    
  }

};
