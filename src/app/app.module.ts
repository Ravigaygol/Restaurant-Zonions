import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateRestaurantComponent } from './Components/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './Components/update-restaurant/update-restaurant.component';

import { HomeRestoDetailsComponent } from './Components/home-resto-details/home-resto-details.component';
import { DetailsRestaurantComponent } from './Components/details-restaurant/details-restaurant.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DisplayAllRestaurantsComponent } from './Components/display-all-restaurants/display-all-restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    UpdateRestaurantComponent,
    HomeRestoDetailsComponent,
    DetailsRestaurantComponent,
    AdminLoginComponent,
    DisplayAllRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
