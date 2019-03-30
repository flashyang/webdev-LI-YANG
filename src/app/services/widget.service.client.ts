import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Widget} from '../model/widget.model.client';

@Injectable()
export  class WidgetService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createWidget(widget) {
    const newWidget = {
      size: widget.size,
      text: widget.text,
      name: widget.name,
      url: widget.url,
      widgetType: widget.widgetType,
      pageId: widget.pageId,
      width: widget.width,
      rows: widget.rows,
      placeholder: widget.placeholder,
      formatted: widget.formatted
    };
    return this.http.post(this.baseUrl + 'api/page/' + newWidget.pageId + '/widget', newWidget);
  }

  findWidgetsByPageId(pageId) {
    return this.http.get(this.baseUrl + 'api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId) {
    return this.http.get(this.baseUrl + 'api/widget/' + widgetId);
  }

  updateWidget(widgetId, widget) {
    const newWidget = {
      size: widget.size,
      text: widget.text,
      name: widget.name,
      url: widget.url,
      widgetType: widget.widgetType,
      pageId: widget.pageId,
      width: widget.width,
      rows: widget.rows,
      placeholder: widget.placeholder,
      formatted: widget.formatted
    };
    return this.http.put(this.baseUrl + 'api/widget/' + widgetId, newWidget);
  }

  deleteWidget(widgetId) {
    return this.http.delete(this.baseUrl + 'api/widget/' + widgetId);
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    return this.http.put(this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '');
  }
}
