const express = require('express');
const router = express.Router();


var ObjectId = require('mongoose').Types.ObjectId;
const { Cart }  = require('../model/cart');

// => localhost:3000/cart/

var cart = express.Router();
cart.get('/', (req, res) => {
    Cart.find((err, Cart) => {
        if (!err) { res.send(Cart); }
        else { console.log('Error in Retriving cartdetails :' + JSON.stringify(err, undefined, 2)); }
    });
});

cart.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Cart.findById(req.params.id, (err, cart) => {
        if (!err) { res.send(cart); }
        else { console.log('Error in Retriving cartdetails :' + JSON.stringify(err, undefined, 2)); }
    });
});


cart.post('/', (req, res) => {
     var car = new Cart ({
        prodId: req.body.prodId,
        img : req.body.img,
        qnt: req.body.qnt,
        amt: req.body.amt,
        name:req.body.name,
        address: req.body.address
      
    });
    console.log(req.body); 
    car.save((err, cart) => {
        if (!err) { res.send(cart); }
        else { console.log('Error in Cart Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

cart.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var car = {
        prodId: req.body.prodId,
        img:req.body.img,
        qnt: req.body.qnt,
        amt: req.body.amt,
        name: req.body.name,
        address: req.body.address
    };
    Cart.findByIdAndUpdate(req.params.id, { $set: car }, { new: true }, (err, Cart) => {
        if (!err) { res.send(Cart); }
        else { console.log('Error in cartdetails Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

cart.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Cart.findByIdAndRemove(req.params.id, (err, Cart) => {
        if (!err) { res.send(Cart); }
        else { console.log('Error in Cart Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = {cart};