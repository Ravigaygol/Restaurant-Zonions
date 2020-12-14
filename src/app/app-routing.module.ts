import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './Components/create-restaurant/create-restaurant.component';
import { DetailsRestaurantComponent } from './Components/details-restaurant/details-restaurant.component';
import { DisplayAllRestaurantsComponent } from './Components/display-all-restaurants/display-all-restaurants.component';
import { HomeRestoDetailsComponent } from './Components/home-resto-details/home-resto-details.component';
import { UpdateRestaurantComponent } from './Components/update-restaurant/update-restaurant.component';

const routes: Routes = [
  {path:'',redirectTo:'default',pathMatch:'full'},
  {path:'default',component:HomeRestoDetailsComponent},
  {path:'Homepage',component:AppComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'restaurant',component:DisplayAllRestaurantsComponent,
  children :[     
 //   {path:'add',component:CreateRestaurantComponent},
  //  {path:'resto', component:RestoListComponent}
    ]},
    {path:'add',component:CreateRestaurantComponent},
    {path:'restUpdate/:restid',component:UpdateRestaurantComponent},
    {path:'restDetails/:restid',component:DetailsRestaurantComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
