import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  constructor(private auth: AuthService) {
    this.auth.
    cartSubject.subscribe((data) => {
    this.cartItem = data;
    });
      }
     // tslint:disable-next-line: no-inferrable-types
    cartItem: number = 0;

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(): void {
      this.cartItemFunc();
    }
    cartItemFunc() {
    if
    (localStorage.getItem
      ('localCart') != null) {
    // tslint:disable-next-line: prefer-const
    let cartCount =
    JSON.parse
    (localStorage.getItem
      ('localCart'));
    this.cartItem =
    cartCount.length;
    }
    }


    }

