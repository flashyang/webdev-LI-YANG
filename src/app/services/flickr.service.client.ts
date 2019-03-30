import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = '7fba5128545496763fd3c4be85cac0a0';
  secret = '2d453d91fea8131a';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT'
    + '&format=json&nojsoncallback=1';

  constructor(private _http: HttpClient) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
