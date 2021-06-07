const mongoose = require('mongoose');
const dbUrl = mongoose.connect('mongodb://localhost:27017/shoppingcart',
 {useNewUrlParser: true,useUnifiedTopology: true})
 .then(response=>{
    console.log('mongodb is connected');
})
.catch(err=>{
    console.log('mongodb is not connected');
})

module.exports = {dbUrl};