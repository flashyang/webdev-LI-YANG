import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../model/widget.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = user._id;
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );
  }

  create(type) {
    const newWidget = {
      widgetType: type,
      pageId: this.pageId,
      size: 4,
      name: '',
      text: 'default',
      url: '',
      width: 4,
      rows: 0,
      placeholder: '',
      formatted: false
    };
    return this.widgetService.createWidget(newWidget).subscribe((widget: Widget) => {
      this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + widget._id]);
    });
  }

}
