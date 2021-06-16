const mongoose = require('mongoose');

const Schema =  mongoose.Schema

const cartSchema = new Schema({
    prodId: Number ,
    img: String ,
    qnt: Number,
    amt: Number,
    name: String,
    address: String
})
module.exports = mongoose.model('cart', cartSchema,'carts');
