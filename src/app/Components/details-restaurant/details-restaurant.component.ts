import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {

  restid:number;
  restaurants: Observable<Restaurant[]>;
  restaurant: Restaurant;
  constructor(private route: ActivatedRoute,private router: Router,
    private restaurantService: RestaurantService,private httpClient: HttpClient) { }
  ngOnInit() {
    this.restaurant = new Restaurant();

    this.restid = this.route.snapshot.params['restid'];
    console.log("In Details Reeeeesssst id"+this.restid);
    this.restaurantService.getRestaurant(this.restid)
      .subscribe(data => {
        console.log(data)
        console.log("Reeeeesssst id"+this.restid)
        this.restaurant = data;
      }, error => console.log(error)
      );
}

  list(){
    this.router.navigate(['default']);
  }

}
