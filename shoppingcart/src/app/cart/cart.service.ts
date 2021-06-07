import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly baseUrl = 'http://localhost:3200/cart';
  items = [];
addToCart(product) {
      this.items.push(product);
    }
    getItems() {
      return this.items;
    }
clearCart() {
      return this.items;
}
  constructor(private http: HttpClient) {}
  postCart(car: cart) {
    return this.http.post(this.baseUrl, car);
      }
}
