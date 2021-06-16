import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cartSubject = new Subject<any>();
  readonly baseUrl = 'http://localhost:3200/api/register';
  constructor(private http: HttpClient) { }
  registerUser(user) {
    return this.http.post<any>(this.baseUrl, user);
  }
}
