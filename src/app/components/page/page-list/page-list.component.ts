import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages = [];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        return this.pageService.findPageByWebsiteId(this.websiteId).subscribe(pages => {
          let x;
          for (x in pages) {
            this.pages.push(pages[x]);
          }
        });
      }
    );

  }

}
