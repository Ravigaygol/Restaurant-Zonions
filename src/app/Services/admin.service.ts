import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../Model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient,private router: Router) { }
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginAdminFromRemote(admin:Admin):Observable<any>
  {
    console.log("In admin service :"+admin.username);
    console.log("In admin service :"+admin.password);
    this.loggedIn.next(true);
/*     return this._http.post("http://localhost:8080/loginadmin",{"username":admin.username,"password":admin.password}); */
      return this._http.post("http://localhost:8080/loginadmin",admin);
}

get isLoggedIn() {
  return this.loggedIn.asObservable();
}
logout() {
  this.loggedIn.next(false);
  this.router.navigate(['adminLogin']);

}
}
