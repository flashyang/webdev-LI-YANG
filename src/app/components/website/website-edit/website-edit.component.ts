import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  website_id;
  website;
  websites = [];


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.website_id = params['wid'];
      }
    );
    this.website = this.websiteService.findWebsitesById(this.website_id);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  delete() {
    console.log('delete website');
    this.websiteService.deleteWebsite(this.website_id);
  }

  update() {
    console.log('update');
    const newWebsite = {
      name: this.createForm.value.name,
      developerId: this.userId,
      description: this.createForm.value.description
    };
    this.websiteService.updateWebsite(this.website_id, newWebsite);
  }

}
