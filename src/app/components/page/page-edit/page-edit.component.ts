import { Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Page} from '../../../model/page.model.client';
import {SharedService} from '../../../services/shared.service';

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
  page: Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = user._id;
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        return this.pageService.findPageById(this.pageId).subscribe((page: Page) => {
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
    return this.pageService.updatePage(this.pageId, newPage).subscribe((page: Page) => {
      this.page.name = page.name;
      this.page.websiteId = page.websiteId;
      this.page.title = page.title;
    });
  }

}
