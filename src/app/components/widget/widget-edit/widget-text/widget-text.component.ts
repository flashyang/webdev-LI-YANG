import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  @Input() widget;
  @Input() userId;
  @Input() websiteId;
  @Input() pageId;
  @ViewChild('inputForm') createForm: NgForm;

  constructor(private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
  }

  update() {
    return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(data => {
      this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    });
  }

  delete() {
    return this.widgetService.deleteWidget(this.widget._id).subscribe(data => {
      console.log('delete');
    });
  }

}