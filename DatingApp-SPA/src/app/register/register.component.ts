import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesForHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(()=> {
      // console.log("Registration Successful");
      this.alertify.success("Registration Successful");
    },error=>{
      // console.log("Registration Successful");
      this.alertify.error(error);
    });
    //console.log(this.model);
  }

  cancel() {
    this.cancelRegister .emit(false);
    // console.log("Cancelled");    
  }

}
