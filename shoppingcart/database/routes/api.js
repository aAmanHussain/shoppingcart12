const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')

const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/shoppingcart"


mongoose.connect(db, err => {
  if(err){
    console.log("Error: "+err)
  }
  else{
    console.log("Connection Established Successfully")
  }
})
router.get('/', (req, res) => {
  res.send("From API ROUTE")
})

router.post('/cart', (req, res) => {
  let cartData = req.body
  console.log(req.body)
  let cart = new Cart(cartData)
  cart.save((error, detailsCart) => {
    if(error){
      console.log("Error: "+ error)
    }
    else{
      res.status(200).send(detailsCart)
    }
  })
})


// router.post('/login', (req, res) => {
//   let userData = req.body

//   User.findOne({username: userData.username}, (error, user)=> {
//     if(error){
//       console.log("Error: "+ error)
//     }
//     else {

//           if (!user){
//           res.status(401).send("Invalid Username")
//          }

//       else if(user.password !== userData.password){
//         res. status(401).send("Invalid Password")
//       }

//     else{
//       res.status(200).send(user)
//     }
//   }
//   })
// })


module.exports = router