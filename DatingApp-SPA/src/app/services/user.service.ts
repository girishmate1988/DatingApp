import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../_models/User';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization':'Bearer '+localStorage.getItem('token')
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiURL;

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  // return this.http.get<User[]>(this.baseUrl + 'Users',httpOptions);
  return this.http.get<User[]>(this.baseUrl + 'Users');
}

getUser(id: number): Observable<User> {
  // return this.http.get<User>(this.baseUrl + 'Users/' + id,httpOptions);
  return this.http.get<User>(this.baseUrl + 'Users/' + id);
}

}
