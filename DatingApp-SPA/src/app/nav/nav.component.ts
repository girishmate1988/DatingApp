import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    //console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        //console.log("logged in Successfully.")
        this.alertify.success("logged in Successfully");
      }, error => {
        // console.log(error);
        this.alertify.error(error);
      }
    );
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    //console.log('logged out');
    this.alertify.message("logged out");
  }

}
