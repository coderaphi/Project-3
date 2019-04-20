import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API_KEY= 'LyTgHZN12qqHF2PxLsDAk5t8';

export default {


  getTv: function (category ='abcat0101000'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getProducts: function (category ='abcat0600000'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
  },

  getMovies: function (category ='abcat0600000'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getFridge: function (category ='pcmcat300300050002'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getHomeAudio: function (category ='pcmcat273800050036'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getPlaystation: function (category ='pcmcat295700050012'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getPhones: function (category ='pcmcat209400050001'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getFitnessWearables: function (category ='pcmcat295700050012'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },
  getCameras: function (category ='abcat0401000'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },
  getLaptops: function (category ='abcat0502000'){
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
    
  },

  getProducts: function(category = 'abcat0401000') {
    console.log(category);
    return axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=${API_KEY}&format=json`); 
  },

  getCategories: function() {
    return axios.get(`https://api.bestbuy.com/v1/categories?apiKey=${API_KEY}&format=json&pageSize=10`);
  }

  
};

