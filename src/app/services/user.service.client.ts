import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {HttpClient, HttpParams} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createUser(user) {
    return this.http.post(this.baseUrl + 'api/user', user);
  }

  findUserById(userId) {
    return this.http.get(this.baseUrl + 'api/user/' + userId);
  }

  findUserByUsername(username) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.http.get(this.baseUrl + 'api/user',  { params: params });
  }

  findUserByCredentials(username, password) {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    return this.http.get(this.baseUrl + 'api/user',  { params: params });
  }

  updateUser(user, userId) {
    return this.http.put(this.baseUrl + 'api/user/' + userId, user);
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + 'api/user/' + userId);
  }

}
