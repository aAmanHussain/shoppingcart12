const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();

var { Cart } = require('./model/cart');
const dbUrl = require('./mongodb/connection');
var { Cart } = require('./routes/cart');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.listen(3200, () => console.log('Server started at port : 3200'));
app.use('/cart', require('./routes/cart').cart);