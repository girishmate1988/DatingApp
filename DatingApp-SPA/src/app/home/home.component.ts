import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registermode = false;
  
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getValues();
  }

  registertoggle() {
    this.registermode = true;  
  }

  cancelRegisterMode(registermode: boolean)
  {
      this.registermode = registermode;
  }

  /* getValues() {
    this.http.get('https://localhost:44328/api/values').subscribe(response => {
      this.values = response;
    }, error => console.log(error));

  }*/
}
