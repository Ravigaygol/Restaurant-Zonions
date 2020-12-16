import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private registerUrl = 'http://localhost:8080/registerresto';
  private getAllUrl = 'http://localhost:8080/allRestaurants';
  private getByIdUrl = 'http://localhost:8080/getRestById';
  private updateUrl = 'http://localhost:8080/updateRest';
  private deleteUrl = 'http://localhost:8080/deleteRest';
  private uploadUrl = 'http://localhost:8080/upload';

  constructor(private http: HttpClient) { }

  getRestaurantById(restid: number): Observable<any> {
    return this.http.get(`${this.getByIdUrl}/${restid}`);
  }

  createRestaurant(restaurant: Object): Observable<Object> {
    return this.http.post(`${this.registerUrl}`, restaurant);
  }

  updateRestaurant(restid: number, value: any): Observable<Object> {
    console.log("Update Service: " + restid);
    console.log("Update URL" + this.updateUrl + '/' + restid);
    return this.http.put(this.updateUrl + '/' + restid, value);
  }

  deleteRestaurant(restid: number): Observable<any> {
    console.log("Delete Service: " + restid);
    console.log("Delete URL" + this.deleteUrl + '/' + restid);
    return this.http.delete(this.deleteUrl + '/' + restid, { responseType: 'text' });

  }

  getAllRestaurant(): Observable<any> {
    return this.http.get(`${this.getAllUrl}`);
  }
  UploadFileFromService(file: any, restid: number): any { /* Method to Upload the Menu */
    let target: DataTransfer = <DataTransfer>(file.target);
    let fileList: FileList = target.files;
    let Selectedfile: File = fileList[0];
    const formdata: FormData = new FormData();
    formdata.append('file', Selectedfile, Selectedfile.name);
    const req = new HttpRequest('PUT', `${this.uploadUrl}/${restid}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }

}
