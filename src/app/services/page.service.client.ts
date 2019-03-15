import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class PageService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createPage(page) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      title: page.title
    };

    return this.http.post(this.baseUrl + 'api/website/' + new_page.websiteId + '/page', new_page);
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
