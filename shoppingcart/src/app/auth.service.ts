import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = 'http://localhost:3000/cart';
  cartSubject = new Subject<any>();
  constructor() { }
}
