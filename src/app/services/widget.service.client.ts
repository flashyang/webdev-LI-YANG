import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export  class WidgetService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  createWidget(widget) {
    const new_widget = {
      _id: (new Date()).getTime() + '',
      widgetType: widget.widgetType,
      pageId: widget.pageId,
      size: widget.size,
      text: widget.text
    };
    return this.http.post(this.baseUrl + 'api/page/' + new_widget.pageId + '/widget', new_widget);
  }

  findWidgetsByPageId(pageId) {
    return this.http.get(this.baseUrl + 'api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId) {
    return this.http.get(this.baseUrl + 'api/widget/' + widgetId);
  }

  updateWidget(widgetId, widget) {
    return this.http.put(this.baseUrl + 'api/widget/' + widgetId, widget);
  }

  deleteWidget(widgetId) {
    return this.http.delete(this.baseUrl + 'api/widget/' + widgetId);
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    return this.http.put(this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '');
  }
}
