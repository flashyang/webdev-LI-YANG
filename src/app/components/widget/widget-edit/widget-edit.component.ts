import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../model/widget.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = user._id;
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        return this.widgetService.findWidgetById(this.widgetId).subscribe((widget: Widget) => {
          this.widget = widget;
        });
      }
    );
  }

}
