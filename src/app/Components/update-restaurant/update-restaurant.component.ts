import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  restid:number;
  restaurant:Restaurant;
  constructor(private route: ActivatedRoute,private router: Router,
    private restaurantService:RestaurantService,private httpClient: HttpClient,) { }
    
    message: string;
    file:any;
    private uploadUrl='http://localhost:8080/upload';

  ngOnInit() {
    this.restaurant=new Restaurant();

    this.restid = this.route.snapshot.params['restid'];
    console.log("ONNNN Update Rest iddddd:"+this.restid);
    this.restaurantService.getRestaurant(this.restid)
      .subscribe(data => {
        console.log(data)
        this.restaurant = data;
      }, error => console.log(error));
  }

  updateRestaurant() {
    
    this.restaurantService.updateRestaurant(this.restid, this.restaurant)
      .subscribe(data => {
        console.log(data);
        console.log("Update component restid :"+this.restid);
        this.restaurant = new Restaurant();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRestaurant();    
  }

  gotoList() {
    this.router.navigate(['restaurant']);
  }

}
