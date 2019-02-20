import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  websites = [];
  website;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );

    this.websites = this.websiteService.findWebsitesByUser(this.userId);

  }

  create() {
    const newWebsite = {
      name: this.createForm.value.name,
      developerId: this.userId,
      description: this.createForm.value.description
    };
    console.log(newWebsite);
    this.website = this.websiteService.createWebsite(newWebsite);
  }


}
