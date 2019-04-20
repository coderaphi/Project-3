const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wishListSchema = new Schema({
    name: String,
    url: String,
    image: String,
    tabName: String,
    salePrice: Number,
    productId: Number,
    date: { type: Date, default: Date.now }, 
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;