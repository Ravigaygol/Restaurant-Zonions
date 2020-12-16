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
  Admin = new Admin();
  restaurants: Observable<Restaurant[]>;
  rest = new Restaurant();

  constructor(private restaurantService: RestaurantService,
    private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.refreshRestaurants();
  }

  refreshRestaurants() {                                   /* <---Method to Diplay all the Restaurants list again to admin */
    this.restaurants = this.restaurantService.getAllRestaurant();
  }

  deleteRestaurant(restid: number) {                      /* <---Method call from Display List Form to Delete Restaurant */
    this.restaurantService.deleteRestaurant(restid)
      .subscribe(
        data => {
          this.refreshRestaurants();
        },
        error => console.log(error));
  }

  updateRestaurant(restid: number) {                     /* <---Method call from Display List Form to Update Restaurant */
    this.router.navigate(['restUpdate', restid]);
  }

  createRestaurant(restaurant: Restaurant) {             /* <---Method call from Display List Form to Create Restaurant */
    this.router.navigate(['add', restaurant]);
  }

  list() {                                               /* <---Method for come back to the Homepage */
    this.router.navigate(['default']);
  }

}
