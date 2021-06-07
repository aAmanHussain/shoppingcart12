import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule, Validators} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { PapadComponent } from './papad/papad.component';
import { SpicesComponent } from './spices/spices.component';
import { CartService } from './cart/cart.service';
import { AuthService} from './auth.service';



const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'product', component: ProductComponent},
 {path: 'dryfruits', component: DryfruitsComponent},
 {path: 'spices', component: SpicesComponent},
 {path: 'papad', component: PapadComponent},
 {path: 'cart', component: CartComponent},
 {path: '**', redirectTo: 'home'},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DryfruitsComponent,
    SpicesComponent,
    PapadComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
