import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-dryfruits',
  templateUrl: './dryfruits.component.html',
  styleUrls: ['./dryfruits.component.css']
})
export class DryfruitsComponent implements OnInit {
  constructor(private auth: AuthService, private cartService: CartService) { }
  items = this.cartService.getItems();

  productArray = [
  {
      prodId: 1,
      img: 'assets/images/p1.jpg',
      nam: 'Almond',
      qnt: '1',
      amt: '400',
    },
    {
      prodId: 2,
      img: 'assets/images/p2.jpg',
      nam: 'Cashew',
      qnt: '1',
      amt: '600',
    },
    {
      prodId: 3,

      img: 'assets/images/p3.jpg',
      nam: 'Pista',
      qnt: '1',
      amt: '800',
    },
    {
      prodId: 4,
      img: 'assets/images/p4.jpg',
      nam: 'Dates',
      qnt: '1',
      amt: '1000',
    },
    {
      prodId: 5,
      img: 'assets/images/p5.jpg',
      nam: 'Dry grapes',
      qnt: '1',
      amt: '800',
    },
    {
      prodId: 6,
      img: 'assets/images/p6.jpg',
      nam: 'Anjeer',
      qnt: '1',
      amt: '800',
    }
  ];
  itemsCart: any = [];

 cartNumber = 0;

  ngOnInit() {
  }
  inc(prod) {
    // console.log(prod.qnt);
    // tslint:disable-next-line: triple-equals
    if (prod.qnt != 5) {
      ++prod.qnt;
    }

  }

  dec(prod) {
    // tslint:disable-next-line: triple-equals
    if (prod.qnt != 1) {
    --prod.qnt;
    }
  }
  addCart(category) {
    const cartDataNull =
  localStorage.getItem('localCart');
    if (cartDataNull == null) {
      const storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem
        ('localCart',
     JSON.stringify(storeDataGet));
    } else {
      var id = category.prodId;
      let index: number = -1;
      this.itemsCart =
    JSON.parse
(localStorage.getItem
('localCart'));
      for
(let i = 0; i < this.itemsCart.length;
i++) {
if (parseInt(id) ===
parseInt(this.itemsCart[i].prodId)) {
        this.itemsCart[i].qnt =
category.qnt;
        index = i;
        break;
        }
      }
      if (index == -1) {
this.itemsCart.push(category);
localStorage.setItem
('localCart', JSON.stringify
(this.itemsCart));
      } else {
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
 cartNumberFunc() {
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
