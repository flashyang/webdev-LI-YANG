import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

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

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
  }

  update() {
    const newWidget = {
      text: this.createForm.value.text,
      url: this.createForm.value.url,
      width: this.createForm.value.width
    };
    this.widgetService.updateWidget(this.widget._id, newWidget);
  }

  delete() {
    this.widgetService.deleteWidget(this.widget._id);
  }

}
