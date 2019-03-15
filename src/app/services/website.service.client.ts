import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createWebsite(website) {

    const new_website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: website.developerId,
      description: website.description
    };

    return this.http.post(this.baseUrl + 'api/user/' + website.developerId + '/website', new_website);
  }

  findWebsitesByUser(userId) {
    return this.http.get(this.baseUrl + 'api/user/' + userId + '/website');
  }

  findWebsitesById(userId, websiteId) {
    return this.http.get(this.baseUrl + 'api/website/' + websiteId);
  }

  updateWebsite(newWebSite) {
    return this.http.put(this.baseUrl + 'api/website/' + newWebSite._id, newWebSite);
  }

  deleteWebsite(userId, websiteId) {
    return this.http.delete(this.baseUrl + 'api/website/' + websiteId);
  }

}
