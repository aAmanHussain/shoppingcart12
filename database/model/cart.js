const mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
    prodId: { type: Number },
    img: { type: String },
    qnt: { type: Number },
    amt: { type: Number },
    name: { type: String },
    address: {type: String}
})
const Cart = mongoose.model('Cart', CartSchema);
module.exports = {Cart};