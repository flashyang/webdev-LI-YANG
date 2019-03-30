import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class PageService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createPage(page) {
    return this.http.post(this.baseUrl + 'api/website/' + page.websiteId + '/page', page);
  }

  findPageByWebsiteId(websiteId) {
    return this.http.get(this.baseUrl + 'api/website/' + websiteId + '/page');
  }

  findPageById(pageId) {
    return this.http.get(this.baseUrl + 'api/page/' + pageId);
  }

  updatePage(pageId, page) {
    return this.http.put(this.baseUrl + 'api/page/' + pageId, page);
  }

  deletePage(pageId) {
    return this.http.delete(this.baseUrl + 'api/page/' + pageId);
  }
}
