import { Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  websiteId: String;
  website;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );
  }

  create() {
    const new_page = {
      name: this.createForm.value.name,
      websiteId: this.websiteId,
      description: this.createForm.value.description
    };
    console.log(new_page);
    this.pageService.createPage(new_page);
  }

}
