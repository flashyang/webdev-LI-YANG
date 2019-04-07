import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @Input() widget;
  @Input() userId;
  @Input() websiteId;
  @Input() pageId;
  @ViewChild('inputForm') createForm: NgForm;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
  }

  update() {
    return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(data => {
      this.router.navigate(['/user/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    });
  }

  delete() {
    return this.widgetService.deleteWidget(this.widget._id).subscribe(data => {
      console.log('delete');
    });
  }

}
