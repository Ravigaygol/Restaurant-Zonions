import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  Admin = new Admin();
  msg = '';
  constructor(private _service: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }
  loginAdmin() {
    this._service.loginAdminFromRemote(this.Admin).subscribe(
      data => {
        console.log("Responce received")
        sessionStorage.setItem("user", JSON.stringify(this.Admin.username));
        this._router.navigate(["restaurant"]);
      },
      error => {
        console.log("Exception occured" + error)
        this.msg = "Bad credentials please enter valid Username / password";
      }
    );
  }
}
