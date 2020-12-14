import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  rest=Restaurant;
  submitted = false;
  constructor(private  restaurantservice: RestaurantService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }

  save() {
    this.restaurantservice
    .createRestaurant(this.restaurant).subscribe(data => {
      console.log(data)
      this.restaurant = new Restaurant();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['restaurant']);
  }
 time={hour:14,minute:30};

}
