import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';

import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()



export class UserService {

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  baseUrl = environment.baseUrl;

  options = {withCredentials: true};


  login(username: String, password: String) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + 'api/login', body, this.options);
  }

  logout() {
    return this.http.post(this.baseUrl + 'api/logout', '', this.options);
  }

  loggedIn() {
    return this.http.post(this.baseUrl + 'api/loggedIn', '', this.options)
      .pipe( map((user)  => {
      if (user !== 0) {
        this.sharedService.user = user; // setting user as global variable using shared service
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }

  register(username: String, password: String) {
    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + 'api/register', body, this.options);
  }

  updateUser(user, userId) {
    return this.http.put(this.baseUrl + 'api/user/' + userId, user);
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + 'api/user/' + userId);
  }

}
