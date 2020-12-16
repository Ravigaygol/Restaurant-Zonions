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
  restid: number;
  restaurant: Restaurant;
  displayURL = "http://localhost:8080/get";
  imagePath: any;
  message: string;
  selectedFile: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private restaurantService: RestaurantService, private httpClient: HttpClient) { }

  UploadMenu() {
    console.log("In onUpload " + this.selectedFile + "selected rest id :" + this.restid);
    this.restaurantService.UploadFileFromService(this.selectedFile, this.restid).subscribe((resp: any) => {
      if (resp.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
  }
  public ChooseFile(selectedFile: any) {
    this.selectedFile = selectedFile;
  }
  ngOnInit() {
    this.restaurant = new Restaurant();
    this.restid = this.route.snapshot.params['restid'];
    this.restaurantService.getRestaurantById(this.restid)
      .subscribe(data => {
        this.restaurant = data;
        this.imagePath = `${this.displayURL}/${this.restaurant.restid}/${this.restaurant.name}`;
      }, error => console.log(error));
  }

  updateRestaurant() {  /* Method call from update restaurant form to update the restaurant*/
    this.restaurantService.updateRestaurant(this.restid, this.restaurant)
      .subscribe(data => {
        this.restaurant = new Restaurant();
        this.restaurantList();
      }, error => console.log(error));
  }

  restaurantList() {  /* Method to display all the restaurant again to admin after successfully updated restaurant */
    this.router.navigate(['restaurant']);
  }

}
