import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

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
      size: this.createForm.value.size
    };
    this.widgetService.updateWidget(this.widget._id, newWidget);
  }

  delete() {
    this.widgetService.deleteWidget(this.widget._id);
  }

}
