import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private flickrService: FlickrService, private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = user._id;
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          // let val = data._body;
          // val = val.replace('jsonFlickrApi(', '');
          // val = val.substring(0, val.length - 1);
          // val = JSON.parse(val);
          this.photos = data.photos.photo;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    const widget = {
      websiteId : this.websiteId,
      pageId : this.pageId,
      url: url,
      widgetType: 'IMAGE'
    };

    console.log("start to update");
    this.widgetService.updateWidget(this.widgetId, widget).subscribe((data: any) => {
        console.log("finish update");
        console.log(data);
          const result = data;
          if (result) {
            this.router.navigate(["/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget/" + this.widgetId]);
          } else {
            this.error = 'failed!';
          }
        }
      );
  }

}
