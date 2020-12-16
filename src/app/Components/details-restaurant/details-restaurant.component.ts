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

  restid: number;
  restaurants: Observable<Restaurant[]>;
  restaurant: Restaurant;
  fileURL = "http://localhost:8080/get";     /* <---URL comes from rest api to display the uploaded menu */
  imagePath: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private restaurantService: RestaurantService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.restid = this.route.snapshot.params['restid'];
    this.restaurantService.getRestaurantById(this.restid)
      .subscribe(data => {
        this.restaurant = data;
        this.imagePath = `${this.fileURL}/${this.restaurant.restid}/${this.restaurant.name}`;
      }, error => console.log(error)
      );
  }

  list() {                             /* <---Method call from details Form for come back to Homepage */
    this.router.navigate(['default']);
  }

}
