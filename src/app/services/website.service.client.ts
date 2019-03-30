import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createWebsite(website) {
    return this.http.post(this.baseUrl + 'api/user/' + website.developerId + '/website', website);
  }

  findWebsitesByUser(userId) {
    return this.http.get(this.baseUrl + 'api/user/' + userId + '/website');
  }

  findWebsitesById(userId, websiteId) {
    return this.http.get(this.baseUrl + 'api/website/' + websiteId);
  }

  updateWebsite(newWebSite, webid) {
    return this.http.put(this.baseUrl + 'api/website/' + webid, newWebSite);
  }

  deleteWebsite(userId, websiteId) {
    return this.http.delete(this.baseUrl + 'api/website/' + websiteId);
  }

}
