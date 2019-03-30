import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../../../model/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        return this.widgetService.findWidgetsByPageId(this.pageId).subscribe((widgets: Widget[])  => {
          this.widgets = widgets;
        });
      }
    );
  }

  url(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log('reorder')
      );
  }

}
