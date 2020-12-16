import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-home-resto-details',
  templateUrl: './home-resto-details.component.html',
  styleUrls: ['./home-resto-details.component.css']
})
export class HomeRestoDetailsComponent implements OnInit {
  restaurants: Observable<Restaurant[]>;
  rest = new Restaurant();

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList() { /* Method getting all the active restaurants */
    this.restaurants = this.restaurantService.getAllRestaurant();
  }
  restaurantDetails(restid: number) {
    this.router.navigate(['restDetails', restid]);
  }

}
