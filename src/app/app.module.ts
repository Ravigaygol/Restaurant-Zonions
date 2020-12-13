import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateRestaurantComponent } from './Components/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './Components/update-restaurant/update-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    UpdateRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
