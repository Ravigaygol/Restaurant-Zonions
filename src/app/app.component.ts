import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './Model/admin';
import { AdminService } from './Services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zonions';
  isLoggedIn$: Observable<boolean>;
  admin: Admin;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.adminService.isLoggedIn;
    console.log("Loggednnnn" + this.isLoggedIn$);
  }

  onLogout() {
    this.adminService.logout();
  }
  adminLogin() {
    this.router.navigate(['adminLogin']);
  }
}
