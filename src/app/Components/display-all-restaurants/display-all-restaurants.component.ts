import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Model/admin';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-display-all-restaurants',
  templateUrl: './display-all-restaurants.component.html',
  styleUrls: ['./display-all-restaurants.component.css']
})
export class DisplayAllRestaurantsComponent implements OnInit {
  Admin =new Admin();
  restaurants: Observable<Restaurant[]>;
  rest=new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private router: Router,private httpClient: HttpClient) {}
   
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.restaurants = this.restaurantService.getAllRestaurant();
  }

  deleteRestaurant(restid: number) {
    console.log("Delete restid :"+restid)
    this.restaurantService.deleteRestaurant(restid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(); 
        },
        error => console.log(error)); 
  }
  updateRestaurant(restid: number){
    console.log("Update restID :"+restid);
    this.router.navigate(['restUpdate', restid]);
  }
  createRestaurant(restaurant:Restaurant){
    console.log("Restaurant Obbject :"+restaurant);
    this.router.navigate(['add', restaurant]);
  }
  list(){
    this.router.navigate(['default']);
  }
  isLoggedIn$: Observable<boolean>;

}
