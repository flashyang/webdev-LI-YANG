import { Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('inputForm') updateForm: NgForm;

  userId: String;
  websiteId: String;
  pageId: String;
  page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        return this.pageService.findPageById(this.pageId).subscribe(page => {
          console.log(page);
          this.page = page;
        });
      }
    );
  }

  delete() {
    return this.pageService.deletePage(this.pageId).subscribe(date => {
      console.log('delete page');
    });
  }

  update() {
    const newPage = {
      name: this.updateForm.value.name,
      websiteId: this.websiteId,
      title: this.updateForm.value.title
    };
    return this.pageService.updatePage(this.pageId, newPage).subscribe(page => {
      this.page = page;
    });
  }

}
