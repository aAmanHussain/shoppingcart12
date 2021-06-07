import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-papad',
  templateUrl: './papad.component.html',
  styleUrls: ['./papad.component.css']
})
export class PapadComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(private auth: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  productArray = [

    {
      prodId: 1,
      img: "assets/images/pp1.jpg",
      nam: "Rice floor Chips",
      qnt: "1",
      amt: "400",
    },
    {
      prodId: 2,
      img: "assets/images/pp2.jpg",
      nam: "Sabudhana Chips",
      qnt: "1",
      amt: "600",
    },
    {
      prodId: 3,
      img: "assets/images/pp3.jpg",
      nam: "Small Sabudhana Chips",
      qnt: "1",
      amt: "800",
    },
    {
      prodId: 4,
      img: "assets/images/pp4.jpg",
      nam: "Curd Chilli",
      qnt: "1",
      amt: "1000",
    },
    {
      prodId: 5,
      img: "assets/images/pp5.jpg",
      nam: "Moongdal Papad",
      qnt: "1",
      amt: "800",
    },
    {
      prodId: 6,
      img: "assets/images/pp6.jpg",
      nam: "Rice Papad",
      qnt: "1",
      amt: "800",
    }
  ];
  inc(prod){
    //console.log(prod.qnt);
    if (prod.qnt != 5){
      ++prod.qnt;
    }
    
  }
  
  dec(prod){
    if (prod.qnt != 1){
    --prod.qnt;
    }
  }
  itemsCart: any = [];
  addCart(category){
    let cartDataNull = 
  localStorage.getItem('localCart');
    if (cartDataNull == null){
      let storeDataGet: any = [];
    storeDataGet.push(category);
      localStorage.setItem
        ('localCart', 
     JSON.stringify(storeDataGet));
    }
    else{
      var id = category.prodId;
      let index: number = -1;
      this.itemsCart = 
    JSON.parse
(localStorage.getItem
('localCart'));
for
(let i = 0; i < this.itemsCart.length; 
i++){
if (parseInt(id) === 
parseInt(this.itemsCart[i].prodId))
{
        this.itemsCart[i].qnt = 
category.qnt;
          index = i;
          break;
        }
      }
      if (index == -1){
this.itemsCart.push(category);
        localStorage.setItem
('localCart', JSON.stringify
(this.itemsCart));
      }
      else{
        localStorage.setItem
('localCart', JSON.stringify
(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

 cartNumber: number = 0;
 cartNumberFunc(){
   var cartValue = 
JSON.parse
(localStorage.getItem
('localCart'));
   this.cartNumber = 
cartValue.length;
   this.auth.cartSubject.next
(this.cartNumber);
 }
  
}

