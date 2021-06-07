import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private auth: AuthService,private cartService: CartService) { }

  ngOnInit(): void {
  }

  productArray= [

    {
      prodId:1,
      img:"assets/images/sp1.jpg",
      nam:"Dhaniyapowder",
      qnt:"1",
      amt:"400",
    },
    {
      prodId:2,
      img:"assets/images/sp2.jpg",
      nam:"cloves",
      qnt:"1",
      amt:"600",
    },
    {
      prodId:3,
      img:"assets/images/sp3.jpg",
      nam:"Elachi(Cardamom)",
      qnt:"1",
      amt:"800",
    },
    {
      prodId:4,
      img:"assets/images/sp4.jpg",
      nam:"Mustardseeds",
      qnt:"1",
      amt:"1000",
    },
    {
      prodId:5,
      img:"assets/images/sp5.jpg",
      nam:"Fenugreekseeds",
      qnt:"1",
      amt:"800",
    },
    {
      prodId:6,
      img:"assets/images/sp6.jpg",
      nam:"Jeera",
      qnt:"1",
      amt:"800",
    }
  ];
  inc(prod){
    //console.log(prod.qnt);
    if(prod.qnt != 5){
      ++prod.qnt;
    }
    
  }
  
  dec(prod){
    if(prod.qnt != 1){
    --prod.qnt;
    }
  }
  itemsCart:any = [];
  addCart(category){
    let cartDataNull = 
  localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any = [];
    storeDataGet.push(category);
      localStorage.setItem
        ('localCart', 
     JSON.stringify(storeDataGet));
    }
    else{
      var id = category.prodId;
      let index:number = -1;
      this.itemsCart = 
    JSON.parse
(localStorage.getItem
('localCart'));
for
(let i=0; i<this.itemsCart.length; 
i++){
if(parseInt(id) === 
parseInt(this.itemsCart[i].prodId))
{
        this.itemsCart[i].qnt = 
category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1){
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

 cartNumber:number = 0;
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

